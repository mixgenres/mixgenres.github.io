interface RenderJob {
  run: () => Promise<void>;
  priority: () => number;
}

/** One DSP graph at a time; needed playback clips take precedence over lookahead/export. */
export class RenderQueue {
  private jobs: RenderJob[] = [];
  private running = false;

  enqueue<T>(run: () => Promise<T>, priority: () => number = () => 2, signal?: AbortSignal): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const abort = () => {
        const index = this.jobs.indexOf(job);
        if (index >= 0) this.jobs.splice(index, 1);
        reject(new DOMException('Render cancelled', 'AbortError'));
      };
      const job: RenderJob = { priority, run: async () => {
        signal?.removeEventListener('abort', abort);
        if (signal?.aborted) { abort(); return; }
        try { resolve(await run()); } catch (error) { reject(error); }
      } };
      if (signal?.aborted) { abort(); return; }
      signal?.addEventListener('abort', abort, { once: true });
      this.jobs.push(job);
      queueMicrotask(() => { void this.drain(); });
    });
  }

  private async drain() {
    if (this.running) return;
    this.running = true;
    try {
      while (this.jobs.length) {
        let next = 0;
        for (let i = 1; i < this.jobs.length; i++) {
          if (this.jobs[i].priority() < this.jobs[next].priority()) next = i;
        }
        await this.jobs.splice(next, 1)[0].run();
      }
    } finally { this.running = false; }
  }
}
