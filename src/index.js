class CountdownTimer {
  constructor({ selector, targetDate }) {
    (this.selector = selector),
      (this.targetDate = targetDate),
      (this.refs = {
        days: document.querySelector('span[data-value="days"]'),
        hours: document.querySelector('span[data-value="hours"]'),
        mins: document.querySelector('span[data-value="mins"]'),
        secs: document.querySelector('span[data-value="secs"]'),
      });
  }

  changeTimer() {
    setInterval(() => {
      this.currentTime = Date.now();
      const deltaTime = this.targetDate - this.currentTime;
      this.visualisationTimer(getTimeComponents(deltaTime));
    }, 1000);
  }

  visualisationTimer({ days, hours, mins, secs }) {
    (this.refs.days.innerHTML = days),
      (this.refs.hours.innerHTML = hours),
      (this.refs.mins.innerHTML = mins),
      (this.refs.secs.textContent = secs);
  }
}

function getTimeComponents(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  return { days, hours, mins, secs };
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("May 12, 2021"),
});
timer.changeTimer();
