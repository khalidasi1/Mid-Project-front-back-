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

/* ===== Contact page: email validation ===== */
function isValidEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

const contactForm = document.querySelector<HTMLFormElement>("#contactForm");
const emailInput = document.querySelector<HTMLInputElement>("#contactEmail");
const emailError = document.querySelector<HTMLElement>("#emailError");

if (contactForm && emailInput && emailError) {
  const showEmailError = (msg?: string) => {
    if (msg) {
      emailError.textContent = msg;
      (emailError as HTMLElement).style.display = "block";
      emailInput.style.borderColor = "#ef4444";
      emailInput.setAttribute("aria-invalid", "true");
    } else {
      emailError.textContent = "";
      (emailError as HTMLElement).style.display = "none";
      emailInput.style.borderColor = "";
      emailInput.removeAttribute("aria-invalid");
    }
  };

  emailInput.addEventListener("input", () => {
    if (emailInput.value === "" || isValidEmail(emailInput.value)) {
      showEmailError();
    }
  });

  contactForm.addEventListener("submit", (e) => {
    if (!isValidEmail(emailInput.value)) {
      e.preventDefault();
      showEmailError("Please enter a valid email (e.g. name@example.com).");
      emailInput.focus();
      return;
    }
    e.preventDefault();
    showEmailError();
    alert("Message captured (demo)");
    contactForm.reset();
  });
}
