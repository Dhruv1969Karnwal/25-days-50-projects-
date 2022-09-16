const btn_1 = document.querySelector("#btn_1");
const body = document.body;
const btn_2 = document.querySelector("#btn_2");
const image = Array.from(document.querySelectorAll(".image"));
const img_1 = document.querySelector("#img_1");
const img_2 = document.querySelector("#img_2");


  var load = 0;

btn_2.addEventListener("click",function(){
  load++;
if(load > image.length-1){
  load = 0;
}
setBgToBody()
setActiveSlide()
})

btn_1.addEventListener("click",function(){
  load--;
  if(load < 0){
    load = image.length - 1;
  }
setBgToBody()
setActiveSlide()
})

function setBgToBody() {
  body.style.backgroundImage = image[load].style.backgroundImage;
}

function setActiveSlide() {
  image.forEach((element) => element.classList.remove('active'))

  image[load].classList.add('active')
}


