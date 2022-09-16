const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d');
const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");
const size_value = document.querySelector("#size");
const color_value = document.querySelector("#color");
const clear = document.querySelector("#clear");

let size = 5;
let x;
let y;
let color = 'black';
let ispressed = false;

canvas.addEventListener("mousedown",(e)=>{
  ispressed = true;
  x = e.offsetX;
  y = e.offsetY;
})
canvas.addEventListener("mouseup",(e) =>{
  ispressed = false
  x = undefined;
  y = undefined;
})
canvas.addEventListener("mousemove",(e)=>{
  if(ispressed){
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    draw_circle(x2,y2)
    draw_line(x,y,x2,y2)
    x = x2;
    y = y2
  }
})

function draw_circle(x,y){
  ctx.beginPath();
ctx.arc(x, y, size, 0, 2* Math.PI);
ctx.stroke();                                 
ctx.fillStyle = color;                         // used to choose color
ctx.fill()                                     // used to fill color in circle
}



function draw_line(x1,y1,x2,y2){
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color
  ctx.lineWidth = size*2;
  ctx.stroke();
}
// draw_line(0,0,100,100);

function update_size(){
  size_value.innerText = size;
}
increase.addEventListener("click",()=>{
size = size+5;
if(size>50){
  size=50
}
update_size();
});


decrease.addEventListener("click",()=>{
  size = size-5;
  if(size<5){
    size=5
  }
  update_size();
  })

  color_value.addEventListener("change",(e)=>{
   color =  e.target.value;
  })

  clear.addEventListener("click",function(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
  })