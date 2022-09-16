const counter_no = Array.from(document.querySelectorAll(".counter_no"));

counter_no.forEach(function (element) {
  element.innerText = 0;

  function update() {
    // // const target = element.getAttribute('data-target');
    // const number = element.innerText;
    // console.log(typeof target, target);
    // console.log(typeof number, number);                       //it gives string type so we convert it into number by adding + sign

    const target = +element.getAttribute('data-target');
    const number = +element.innerText;
    // console.log(typeof target, target);

    const increment = target/300;

    if(number<target){
      element.innerText = `${Math.ceil(number + increment)}`;
      setTimeout(update,1)
    }else{
      element.innerText = target;
    }
  }

  update();

})