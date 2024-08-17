const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn'); // get element by id
const color = document.querySelector(".color"); // get the element by class name

btn.addEventListener('click', function(){
  // get randomNumber btw 0 - 3
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber(){
  return Math.floor(Math.random()*colors.length);
}