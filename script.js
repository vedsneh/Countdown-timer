const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const countdown = () => {
  const targetDate = new Date('December 31, 2024 23:59:59').getTime();
  const currentDate = new Date().getTime();
  
  const timeLeft = targetDate - currentDate;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
  daysElement.innerText = days < 10 ? '0' + days : days;
  hoursElement.innerText = hours < 10 ? '0' + hours : hours;
  minutesElement.innerText = minutes < 10 ? '0' + minutes : minutes;
  secondsElement.innerText = seconds < 10 ? '0' + seconds : seconds;
};

setInterval(countdown, 1000);
