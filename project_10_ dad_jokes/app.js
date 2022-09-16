const para = document.querySelector(".para");

const btn = document.querySelector(".btn");

btn.addEventListener("click",get_joke);
// 
// function get_joke(){
//   fetch('https://api.covid19api.com/summary')
//   // fetch('https://icanhazdadjoke.com/')
//   .then( (apidata) => {
//     // console.log(apidata);
//     return apidata.json();
//   })
//   .then((actualdata) => {
//     console.log(actualdata);
//     console.log(actualdata.Countries[77]);
//     const text = actualdata.Countries[77];
// para.innerHTML = `countery is ${text.Slug} and TotalConfirmed is ${text.TotalConfirmed}`;
    
//   })
//   .catch((error) => {
// console.log(`The error is ${error}`);
//   })
// }

