const audio = new Audio('./tick.mp3');

function clock (timezone) {
  let now = new Date(new Date().toLocaleString("en-US", {timeZone: timezone}));
  let seconds = now.getSeconds();
  let minute = now.getMinutes();
  let hour = now.getHours();

  // For real hour hand movement
  hour = hour + (minute/60);
  
  document.querySelector('.hand.second').style.transform = `rotate(${seconds * 6 + 90}deg)`;
  document.querySelector('.hand.minute').style.transform = `rotate(${minute * 6 + 90}deg)`;
  document.querySelector('.hand.hour').style.transform = `rotate(${hour * 30 + 90}deg)`;

  audio.currentTime = 0;
  audio.play().catch(error => {});
}

var startClock = setInterval( () => {clock('Africa/Lagos')}, 1000);

document.querySelector('.timezones').addEventListener('change', (e) => {
  clearInterval(startClock);
  startClock = setInterval(()=>{clock(e.target.value)}, 1000);
  document.querySelector('h1').textContent = document.querySelector(`option[value="${e.target.value}"]`).textContent;
});
