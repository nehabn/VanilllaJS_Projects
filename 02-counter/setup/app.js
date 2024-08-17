// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function(evt) {
    const classNames = evt.currentTarget.classList;

    if(classNames.contains('decrease')){
      count--;
    }
    else if(classNames.contains('increase')){
      count++;
    }
    else if(classNames.contains('reset')){
      count=0;
    }
    if(count>0){
      value.style.color = "green";
    }
    if(count<0){
      value.style.color = "red";
    }
    if(count == 0){
      value.style.color = "#222";
    }
    
    value.textContent = count;
  })
});
