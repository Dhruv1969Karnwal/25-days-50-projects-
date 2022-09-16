const dropdown = Array.from(document.querySelectorAll(".dropdown"));
const cross = Array.from(document.querySelectorAll(".cross"));
const content = document.querySelector(".content");
const content_div = document.querySelector(".content_div");
const content_head = Array.from(document.querySelectorAll(".content_head"));
const content_para = Array.from(document.querySelectorAll(".content_para"));

dropdown.forEach(function (element) {
  element.addEventListener("click", function () {
    element.style.display = "none";
    var next = element.nextElementSibling;    // we get cross
    // console.log(next);                                                         
    var parent = element.parentElement;       // we get btn_div
    // console.log(parent);                                                           
    var parent_previous = parent.previousElementSibling;     //we get content_para   
    // console.log(parent_previous);                                                                                  
    var parent_previous_element = parent_previous.parentElement;     //we get content
    // console.log(parent_previous_element);                                                    
    var parent_previous_element_element = parent_previous_element.parentElement;     //we get content_div
    // console.log(parent_previous_element_element); 

    parent_previous.style.display = "block";
    next.style.display = "block";
    parent_previous_element_element.classList.add("active_1");

  });
});

cross.forEach(function (element) {
  element.addEventListener("click", function () {
    element.style.display = "none";
    var previous = element.previousElementSibling;  //we get dropdown

    var parent = element.parentElement;        // we get btn_div

    var parent_previous = parent.previousElementSibling;          //we get content_para 

    var parent_previous_element = parent_previous.parentElement;          //we get content

    var parent_previous_element_element = parent_previous_element.parentElement;     //we get content_div


    previous.style.display = "block";
    parent_previous.style.display = "none";
    parent_previous_element_element.classList.remove("active_1");

  });
});

// var is_open = true;

// function open(){
//   if(is_open = true){
//     content_para.style.display = "none";
//   }
//   else{
//     content_para.style.display = "block";
//   }
// }
// open();






// for one button only

// dropdown.addEventListener("click",function(){
//   if(content_para.style.display == "none"){
//     content_para.style.display = "block";

//   }
//   else{
//     content_para.style.display = "none";
//   }
// });


function get_data() {
  fetch('https://api.nobelprize.org/2.1/nobelPrizes?_ga=2.7144754.1084585819.1654265276-1056247529.1654265276')
    .then((apidata) => {
      return apidata.json();
      console.log(apidata);
    })
    .then((actualdata) => {
      console.log(actualdata);
      // content_head_1.innerText = `In which year, ${actualdata.nobelPrizes[0].categoryFullName.en} is distributed`;
      // content_para_1.innerText = `${actualdata.nobelPrizes[0].awardYear}`
      //     for(var i=1;i<6;i++){
      // content_head_1.innerText = `In which year, ${actualdata.nobelPrizes[i].categoryFullName.en} is distributed`;
      //     content_para_1.innerText = `${actualdata.nobelPrizes[i].awardYear}`
      //     }
      content_head.forEach(function (element, index) {
        // for(var i =3;i<5;i++){
        // console.log(index);
        // console.log(actualdata.nobelPrizes[index].categoryFullName.en);
        element.innerText = `In which year, ${actualdata.nobelPrizes[index].categoryFullName.en} is distributed`;
        // element.innerText = `${actualdata.nobelPrizes[index].awardYear}`
        // }
      });
      content_para.forEach(function (element, index) {
        element.innerText = `${actualdata.nobelPrizes[index].awardYear}`
      })
    })
    .catch((error) => {
      console.log(`The error is ${error}`);
    })
}
get_data();

