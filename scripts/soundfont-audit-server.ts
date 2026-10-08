import {createServer} from 'vite';
const server=await createServer({cacheDir:'/tmp/mixgenres-soundfont-vite',server:{host:'127.0.0.1',port:3002,strictPort:true,hmr:false}});
await server.listen();console.log('SoundFont live audit: http://127.0.0.1:3002/scripts/browser-soundfont-audit.html?dev=audio');
