let bar = document.querySelector("#bar");
let progress = document.querySelector("#progress");
let percent = document.querySelector("#percent");
let addBtn = document.querySelector("#addBtn");

let defaultWidth = 10;
percent.innerText = `${defaultWidth}%`;

progress.style.width = `${defaultWidth}%`;
addBtn.onclick = function () {
  if (defaultWidth < 100) {
    progress.style.width = `${(defaultWidth += 10)}%`;
    percent.innerText = `${defaultWidth}%`;
  } else {
    percent.style.color = "red";
    percent.style.fontWeight = "600";
    setTimeout(() => {
      percent.style.color = "black";
      percent.style.fontWeight = "400";
    }, 500);
  }
};
