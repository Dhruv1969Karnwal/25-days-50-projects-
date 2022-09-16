const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";1
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const main = document.querySelector(".main");



// function get_movies(url){
// fetch(url).then((apidata)=>{
//   return apidata.json();
// }).then( (data)=>{
//   console.log(data);
//   const actual_data = data.results;
//   main.innerHTML = "";
//   actual_data.forEach(element => {
//     const { overview, poster_path, title, vote_average} = element;
//     const create = document.createElement("div");
//     create.classList.add("container");
     
//     create.innerHTML = `
//     <img class="image" src="${IMG_PATH + poster_path}" alt="${title}">
//     <div class="head_box">
//       <h1 class="heading">${title}</h1>
//       <span class="${get_class_rate(vote_average)}">${vote_average}</span>
      
//     </div>
//     <div class="overview">
//       <h3 class="heading_overview">Overview</h3>
//       <p class="para">${overview}</p>
//     </div>
//   `

// main.appendChild(create);
    
//   });
// }).catch( (error)=>{
//   console.log(`the error is ${error}`);
// })
// }







async function get_movies(url){
  // fetch(url).then((apidata)=>{
    // return apidata.json();
    const apidata = await fetch(url)
  // })
  // .then( (data)=>{
    // console.log(data);
    const data = await apidata.json();
    const actual_data = data.results;
    main.innerHTML = "";
    actual_data.forEach(element => {
      const { overview, poster_path, title, vote_average} = element;
      const create = document.createElement("div");
      create.classList.add("container");
       
      create.innerHTML = `
      <img class="image" src="${IMG_PATH + poster_path}" alt="${title}">
      <div class="head_box">
        <h1 class="heading">${title}</h1>
        <span class="${get_class_rate(vote_average)}">${vote_average}</span>
        
      </div>
      <div class="overview">
        <h3 class="heading_overview">Overview</h3>
        <p class="para">${overview}</p>
      </div>
    `
  
  main.appendChild(create);
      
    });

}















function get_class_rate(vote){
  if(vote>=8){
    return 'green'
  }
  else if(vote>=5){
    return 'orange'
  }
  else{
    return 'red'
  }
}

get_movies(API_URL);