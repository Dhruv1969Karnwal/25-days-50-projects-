const dark = document.querySelector("#dark");
const h = document.getElementsByTagName("html");             // it give different form
// console.log(h);
const hour_length = document.querySelector("#hour");
const minute_length = document.querySelector("#minute");
const second_length = document.querySelector("#seconds");
const day_content = document.querySelector(".day");
const date_content = document.querySelector(".date");
const time_content = document.querySelector(".time_content");


dark.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    e.target.innerText = 'Light mode'
  }
  else {
    html.classList.add('dark');
    e.target.innerText = 'Dark mode';
  }
})

const days_array = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months_array = ["January","February","March","April","May","June","Jully","August","September","October","November","Decenber"];

function set_time(){
  const time = new Date();
  // console.log('time',time);
  const year = time.getFullYear();
  const month = time.getMonth();
  const hours = time.getHours();
  // console.log('hour',hours);
  const hours_for_clock = hours  >= 13 ? hours%12 : hours;
  const minute = time.getMinutes();
  // console.log('minute',minute);
  const seconds = time.getSeconds();
  // console.log('seconds',seconds);
  const day = time.getDay();
  // console.log('day',day);
  const date = time.getDate();
  // console.log('date',date);
  const ampm = hours >=12 ?'PM' : 'AM';
hour_length.style.transform = `translate(-50%, -100%) rotate(${scale(hours_for_clock,0,12,0,360)}deg)`;
minute_length.style.transform = `translate(-50%,-100%) rotate(${scale(minute,0,60,0,360)}deg)`;
second_length.style.transform = `translate(-50%,-100%) rotate(${scale(seconds,0,60,0,360)}deg)`;
time_content.innerHTML = `${hours_for_clock}:${minute <10 ? `0${minute}` : minute}:${seconds <10 ? `0${seconds}` : seconds} ${ampm}`;
day_content.innerHTML = `${days_array[day]},${months_array[month]} <span class="date">${date}</span>`;
// date_content.innerHTML = `${date}`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
set_time();
setInterval(set_time,1000);