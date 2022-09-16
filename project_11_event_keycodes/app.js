const content_1 = document.getElementById("content_1");
const content_2 = document.querySelector("#content_2");
const content_3 = document.querySelector("#content_3");


window.addEventListener("keypress",function(event){
  // var event_key  = event.key;
content_1.innerText = event.key;
content_2.innerText = event.keyCode;
content_3.innerText = event.code;
});
window.addEventListener("keydown",function(event){
  // var event_key  = event.key;
content_1.innerText = event.key;
content_2.innerText = event.keyCode;
content_3.innerText = event.code;
});

