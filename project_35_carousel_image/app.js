const next = document.querySelector("#next");
const pre = document.querySelector("#pre");
const img_1 = document.querySelector("#img_1");
const img_2 = document.querySelector("#img_2");
const image_array = document.querySelectorAll(".image");
const imgs = document.querySelector("#imgs");


let load = 0;

let interval = setInterval(run, 2000)

function run() {
    load++;
    changeImage();
}

function changeImage() {
    if (load > image_array.length - 1) {
        load = 0;
    }
    else if (load < 0) {
        load = image_array.length - 1;
    }
    imgs.style.transform = `translateX(${-load * 500}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

next.addEventListener("click", () => {
    load++;
    // if(load > image_array.length -1){
    //     load = 0;
    // }
    changeImage();
    // getTranform();
    resetInterval();
});

pre.addEventListener("click", () => {
    load--;
    // if(load<0){
    //     load = image_array.length -1;
    // }
    changeImage();
    // getTranform();
    resetInterval();
});

// function getTranform() {
//     imgs.style.transform = `translateX(${-load * 500}px)`
// }

// const Interval = setInterval(run,2000);










