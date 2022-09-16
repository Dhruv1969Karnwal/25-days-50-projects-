const img_search = document.querySelector(".img_search");
console.log(img_search);
const search = document.querySelector(".search");
console.log(search);
img_search.addEventListener("click", function () {
    search.classList.toggle("active");
});
