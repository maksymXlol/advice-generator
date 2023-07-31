// https://api.adviceslip.com/

let btn = document.querySelector(".btn");
let num = document.querySelector(".advice-number");
let text = document.querySelector(".advice-text");

btn.addEventListener("click", getData);

async function getData() {
  let response = await fetch("https://api.adviceslip.com/advice");
  let data = await response.json();
  const { id, advice } = data.slip;
  text.textContent = advice;
  num.textContent = "advice #" + id;
}

window.addEventListener("load", getData);
