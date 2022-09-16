function allow_drop(ev){
  ev.preventDefault();
}
function drag(ev){
  ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev){
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

const div = Array.from(document.querySelectorAll(".div"));

div.forEach(function(elemnet,index){
  elemnet.addEventListener("mouseenter",function(){
    elemnet.classList.add("active");
  })
})
div.forEach(function(elemnet,index){
  elemnet.addEventListener("mouseleave",function(){
    elemnet.classList.remove("active");
  })
})