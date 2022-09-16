const card_header = document.querySelector('.card_header');
const title = document.querySelector('.title')
const para_content = document.querySelector(".para_content");
const profile_img = document.querySelector(".profile_img");
const name = document.querySelector(".name");
const date = document.querySelector(".date");
const animated_bg = document.querySelectorAll(".animated_bg");
const animated_bg_text = document.querySelectorAll('.animated_bg_text');

setTimeout(get_data,2500);

function get_data(){
card_header.innerHTML=
`<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
alt="header_image">`;

title.innerHTML=`Lorem ipsum dolor sit.`;

para_content.innerHTML =`Lorem ipsum dolor sit amet consectetur adipisicib assumenda aliquid.`;

profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg">`;

name.innerHTML = `Dhruv`;

date.innerHTML = `20 may 2003`;

animated_bg.forEach(function(elememt){
  elememt.classList.remove('animated_bg');
})
animated_bg_text.forEach(function(elememt){
  elememt.classList.remove('animated_bg_text');
})
}