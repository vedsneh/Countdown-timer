let countdownInterval;

function startCountdown() {
  const input = document.getElementById("datetime").value;
  if (!input) {
    alert("Please select a date and time.");
    return;
  }

  const targetDate = new Date(input).getTime();
  const now = new Date().getTime();

  if (targetDate <= now) {
    alert("Please choose a future date and time.");
    return;
  }

  document.getElementById("countdown").style.display = "flex";

  if (countdownInterval) clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    const currentTime = new Date().getTime();
    const gap = targetDate - currentTime;

    if (gap <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("days").innerText = "00";
      document.getElementById("hours").innerText = "00";
      document.getElementById("minutes").innerText = "00";
      document.getElementById("seconds").innerText = "00";
      alert("⏰ Countdown Complete!");
      return;
    }

    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    document.getElementById("days").innerText = d.toString().padStart(2, '0');
    document.getElementById("hours").innerText = h.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = m.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = s.toString().padStart(2, '0');
  }, 1000);
}


