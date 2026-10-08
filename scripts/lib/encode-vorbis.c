/* Offline mono f32le -> deterministic Ogg/Vorbis. Uses installed Xiph libraries
 * when ffmpeg was built without libvorbis. No codec runs in live callbacks. */
#include <stdio.h>
#include <stdlib.h>
#include <ogg/ogg.h>
#include <vorbis/vorbisenc.h>

static void page(ogg_page *p) {
  if (fwrite(p->header, 1, p->header_len, stdout) != (size_t)p->header_len ||
      fwrite(p->body, 1, p->body_len, stdout) != (size_t)p->body_len) exit(3);
}
int main(int argc, char **argv) {
  if (argc != 2) return 1;
  vorbis_info info; vorbis_comment comment; vorbis_dsp_state dsp; vorbis_block block;
  ogg_stream_state stream; ogg_page out; ogg_packet packet, h1, h2, h3;
  vorbis_info_init(&info);
  if (vorbis_encode_init_vbr(&info, 1, atoi(argv[1]), .6f)) return 2;
  vorbis_comment_init(&comment);
  vorbis_comment_add_tag(&comment, "ENCODER", "MixGenres libvorbis q6");
  vorbis_analysis_init(&dsp, &info); vorbis_block_init(&dsp, &block);
  ogg_stream_init(&stream, 0); /* fixed serial: repeat builds have identical bytes */
  vorbis_analysis_headerout(&dsp, &comment, &h1, &h2, &h3);
  ogg_stream_packetin(&stream, &h1); ogg_stream_packetin(&stream, &h2); ogg_stream_packetin(&stream, &h3);
  while (ogg_stream_flush(&stream, &out)) page(&out);
  float input[4096]; size_t count;
  do {
    count = fread(input, sizeof(float), 4096, stdin);
    if (ferror(stdin)) return 3;
    float **pcm = vorbis_analysis_buffer(&dsp, (int)count);
    for (size_t i = 0; i < count; i++) pcm[0][i] = input[i];
    vorbis_analysis_wrote(&dsp, (int)count);
    while (vorbis_analysis_blockout(&dsp, &block) == 1) {
      vorbis_analysis(&block, NULL); vorbis_bitrate_addblock(&block);
      while (vorbis_bitrate_flushpacket(&dsp, &packet)) {
        ogg_stream_packetin(&stream, &packet);
        while (ogg_stream_pageout(&stream, &out)) page(&out);
      }
    }
  } while (count);
  while (ogg_stream_flush(&stream, &out)) page(&out);
  ogg_stream_clear(&stream); vorbis_block_clear(&block); vorbis_dsp_clear(&dsp);
  vorbis_comment_clear(&comment); vorbis_info_clear(&info);
  return fflush(stdout) ? 3 : 0;
}
