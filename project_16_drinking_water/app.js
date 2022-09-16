const mini_cup = document.querySelector(".mini_cup");
const cup_content_1 = document.querySelector("#cup_content_1");
console.log(cup_content_1)
const cup_content_2 = document.querySelector("#cup_content_2");

const cup = document.querySelector(".cup");
const write_all = document.querySelector(".write_all");
const write_250 = document.querySelector(".write_250");
const one_250 = document.querySelector("#one_250");
const two_250 = document.querySelector("#two_250");

const active = document.querySelector(".active");


const write = document.querySelector(".write");
const visibility = document.querySelector(".visibility");

const cup_content = Array.from(document.querySelectorAll(".cup_content"));
console.log(cup_content);

cup_content.forEach(function (element,index) {
element.addEventListener("click", (e) =>{
  console.log(index);
element.classList.add("active");
  visibility.innerText = `${(index +1) *12.5}%`
cup.style.backgroundImage = `linear-gradient(to top, #6ab3f8 0%,#6ab3f8 ${(index +1) *12.5}%, #fff 12.5%,#fff 100%)`;
write.innerText = `${(2 - (index +1)*.25)}L`;
write_all.style.transform = `translateY(-${(index +1) *27.5}%)`;
}, {once : true});
});

