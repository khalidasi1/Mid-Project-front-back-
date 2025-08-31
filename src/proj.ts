class Stopwatch {
  private startTime: Date | null = null;
  private endTime: Date | null = null;
  private running = false;
  private duration = 0;

  start(): void {
    if (this.running) throw new Error("Already running");
    this.running = true;
    this.startTime = new Date();
  }

  stop(): void {
    if (!this.running) throw new Error("Not running");
    this.running = false;
    this.endTime = new Date();
    if (!this.startTime || !this.endTime) return;

    const sec = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    this.duration += sec;
  }

  reset(): void {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this.duration = 0;
  }

  isRunning(): boolean {
    return this.running;
  }

  peek(): number {
    return this.running && this.startTime
      ? this.duration + (Date.now() - this.startTime.getTime()) / 1000
      : this.duration;
  }
}

const timeEl = document.getElementById("time") as HTMLElement | null;
const startBtn = document.getElementById(
  "startBtn"
) as HTMLButtonElement | null;
const stopBtn = document.getElementById("stopBtn") as HTMLButtonElement | null;
const resetBtn = document.getElementById(
  "resetBtn"
) as HTMLButtonElement | null;

if (!timeEl || !startBtn || !stopBtn || !resetBtn) {
  throw new Error(
    "Missing DOM elements: #time, #startBtn, #stopBtn, #resetBtn"
  );
}

const sw = new Stopwatch();

function render(): void {
  if (timeEl) timeEl.textContent = `${sw.peek().toFixed(3)} s`;
}

startBtn.addEventListener("click", () => {
  try {
    sw.start();
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    alert(msg);
  }
  render();
});

stopBtn.addEventListener("click", () => {
  try {
    sw.stop();
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    alert(msg);
  }
  render();
});

resetBtn.addEventListener("click", () => {
  sw.reset();
  render();
});

const intervalId: number = window.setInterval(() => {
  if (sw.isRunning()) render();
}, 100);

render();
