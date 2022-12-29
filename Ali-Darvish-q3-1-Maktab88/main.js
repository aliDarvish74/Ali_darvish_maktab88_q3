let textContainer = document.querySelector("#text-container");
let title = document.querySelector("#title");

let lightModeBtn = document.querySelector("#light-mode-btn");
let darkModeBtn = document.querySelector("#dark-mode-btn");

darkModeBtn.onclick = function () {
  textContainer.style.backgroundColor = "#111d2b";
  textContainer.style.color = "#eee";
  title.innerText = "DARK MODE";
};
lightModeBtn.onclick = function () {
  textContainer.style.backgroundColor = "#ddd";
  textContainer.style.color = "#000";
  title.innerText = "LIGHT MODE";
};
