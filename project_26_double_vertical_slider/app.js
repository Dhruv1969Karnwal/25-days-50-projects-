



const down = document.querySelector("#down");
const up = document.querySelector("#up");
const left_array = Array.from(document.querySelectorAll(".left"));
const right_array = Array.from(document.querySelectorAll(".image"));
console.log(right_array);
const content_left = document.querySelector(".content_left");
const content_right = document.querySelector(".content_right");
console.log(content_right);




var load_up = 0;
var load_down = 0;

// down.addEventListener("click",function(){
//   get_load_up();
//   get_load_down();
//   get_content_left();
//   setActiveSlide();
// });

// function get_load_up(){
//   load_up++
//   if(load_up > left_array.length - 1){
//     load_up =0;
//   }
//   console.log(load_up);
// }
// function get_load_down(){
//   load_down--;
//   if(load_down < 0 ){
//     load_down = right_array.length - 1;
//   }
//   console.log(load_down);
// }
// function get_content_left(){
//   left_array.forEach(function(element){
// element.classList.remove("active_left");
// left_array[load_down].classList.add("active_left");
// content_left.style.backgroundColor = left_array[load_down].style.backgroundColor;
//   });
// };
// get_content_left();                     // because of #left_1 to show first in website

function change_right(){
  if(load_up > left_array.length -1){
    load_up =0;
  }
  else if(load_up <0){
    load_up = left_array.length -1;
  }
  left_array.style.transform = `translateY(${-load_up*500}px)`;
}
up.addEventListener("click",()=>{
  change_right();
})


