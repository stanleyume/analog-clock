const audio = new Audio('./tick.mp3');

function clock (timezone) {
  let now = new Date(new Date().toLocaleString("en-US", {timeZone: timezone}));
  let seconds = now.getSeconds();
  let minute = now.getMinutes();
  let hour = now.getHours();
  let ampm = (hour >= 12) ? "P.M" : "A.M";

  // For real hour hand movement
  hour = hour + (minute/60);
  // For real minute hand movement
  minute = minute + (seconds/60);
  
  document.querySelector('.hand.second').style.transform = `rotate(${seconds * 6 + 90}deg)`;
  document.querySelector('.hand.minute').style.transform = `rotate(${minute * 6 + 90}deg)`;
  document.querySelector('.hand.hour').style.transform = `rotate(${hour * 30 + 90}deg)`;
  document.querySelector('.ampm').textContent = ampm;

  audio.currentTime = 0;
  audio.play().catch(error => {});
}

var startClock = setInterval( () => {clock('Africa/Lagos')}, 1000);

document.querySelector('.timezones').addEventListener('change', (e) => {
  clearInterval(startClock);
  startClock = setInterval(()=>{clock(e.target.value)}, 1000);
  document.querySelector('h1').textContent = document.querySelector(`option[value="${e.target.value}"]`).textContent;
});
