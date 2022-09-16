const button = document.querySelectorAll("#ripple");
console.log(button)

button.forEach(element =>{
  element.addEventListener("click",function (e) {
    const x = e.clientX;                   // client(start from webpage) page((start form web page) offset(start from div) screen(staet from window)
    const y = e.clientY;
    // console.log(x,y)

    const button_top = e.target.offsetTop;
    const button_left = e.target.offsetLeft;
    // console.log(button_top,button_left);

    const x_inside = x - button_left;
    const y_inside = y- button_top;
    // console.log(x_inside);

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = y_inside + 'px';
    circle.style.left = x_inside + 'px';

    this.appendChild(circle);

    setTimeout(()=> circle.remove(),500);
  })
})




