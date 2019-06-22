setInterval(() => {
  let now = new Date();
  let seconds = now.getSeconds();
  let minute = now.getMinutes();
  let hour = now.getHours();
  document.querySelector('.hand.second').style.transform = `rotate(${seconds * 6 + 90}deg)`;
  document.querySelector('.hand.minute').style.transform = `rotate(${minute * 6 + 90}deg)`;
  document.querySelector('.hand.hour').style.transform = `rotate(${hour * 6 + 90}deg)`;
}, 1000);