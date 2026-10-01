/**
 * Dedicated transport scheduler worker.
 *
 * Kept as a real module so Vite emits it as a same-origin worker chunk.
 * This avoids Blob/data URL CSP restrictions in hosted environments such as
 * AI Studio while keeping the scheduler off the main thread.
 */
let timer: ReturnType<typeof setInterval> | null = null;

self.onmessage = (event: MessageEvent<'start' | 'stop' | 'ping'>) => {
  if (event.data === 'ping') {
    self.postMessage('pong');
    return;
  }

  if (event.data === 'start') {
    // Immediately fire an initial tick so liveness checks succeed instantly
    self.postMessage('tick');
    if (timer === null) {
      timer = setInterval(() => self.postMessage('tick'), 25);
    }
    return;
  }

  if (event.data === 'stop') {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    }
  }
};

