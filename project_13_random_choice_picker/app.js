// document.querySelector(".btn").onclick = function(){
//   var text = document.querySelector(".text_area").value;
//   console.log(text);
// }


// var save;

// function get_text() {
//   text_area.addEventListener("keydown", function (event) {
// // for(var i=0;i<1;i++){
//   let text = text_area.value;
//  text.array.forEach(element => {
//    element.event.keyCode = 188;
//    console.log("this");
//  });
//   // if(event.keyCode = 188){

//   //   // save =`${save}-${text}`;
//   // }
// // }
   
//   });
//   console.log(save);
 

  // save = "hello"  + text;
  // document.write(`<pre>${save}</pre>`);
// }

// btn.addEventListener("click", get_text);    // we not use parantheses here


const text_area = document.querySelector(".text_area");
const tag_div = document.querySelector(".tag_div");

text_area.focus();

text_area.addEventListener("keyup",function(event){
  // console.log(event.target.value);
  create_tag(event.target.value);

  if(event.key ==="Enter"){
    setTimeout(function(){
      event.target.value = '';
      random_generator();
    },100); 
  }

});

function create_tag(input_text){
  const array_input_text = input_text.split(",").filter( (input) => input.trim() != '').map( (input) => input); 
  // console.log(array_input_text);  //  it will give array 
  // var a = array_input_text[1];
  // console.log(a);
  tag_div.innerHTML = "";

  array_input_text.forEach(element => {
    // console.log(element);
    const tag_create = document.createElement("span");
    tag_create.innerHTML =element;
    tag_create.classList.add("tag");
    tag_div.appendChild(tag_create);
  });
  // const tag_text_div = document.createElement
}

function random_generator(){
const times = 30;
const interval = setInterval(function(){
const random_tag = pick_random();
if(random_tag !== undefined){
  highlight_text(random_tag);
  setTimeout(function(){
    unhighlight_text(random_tag);
  },100);
}
}, 100);

setTimeout(function(){
  clearInterval(interval);
  setTimeout(function(){
    const random_tag = pick_random();
    highlight_text(random_tag);
  },100);
},times*100);
}

function pick_random(){
  const text_having_class_tag = document.querySelectorAll(".tag");
   return text_having_class_tag[(Math.floor(Math.random() * text_having_class_tag.length))]; 
}

function highlight_text(tag_text){
tag_text.classList.add("highlight");
}

function unhighlight_text(tag_text){
  tag_text.classList.remove("highlight");
  }


