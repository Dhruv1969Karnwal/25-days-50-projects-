

// addEventListener("scroll", () =>{
//   if(window.scrollY > 100){
//     content_1.style.opacity = 1;
//   } else if(window.scrollY<100){
//     document.querySelector("#content_1").style.opacity = 0;
//   }
// });

// content.forEach(function (element) {
//   window.addEventListener("load", function () {
//     console.log(element.classList.contains('box_1'));
//     if (box_4) {
//       addEventListener("scroll", () => {
//         if (window.scrollY > 500) {
//           content_4.style.transform = "translateX(0%)";
//         } else if (window.scrollY < 500) {
//           document.querySelector("#content_4").style.transform = "translateX(0%)";
//         }
//       });
//     }

//     element.style.transform = "translateX(0%)";
//   });
// });


// window.addEventListener("scroll",checkboxes);
// checkboxes();

// function checkboxes(){

//   const trigger = window.innerHeight/5*4; 
//    content.forEach(function(element){
//      const display = element.getBoundingClientRect().top;
//     //  console.log(display);
//     if(display < trigger){
//       element.classList.add("show");
//     }
//     else{
//       element.classList.remove("show");
//     }
//    })
// }



const content = document.querySelectorAll('.content');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    content.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}

