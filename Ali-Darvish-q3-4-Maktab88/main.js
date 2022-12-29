let input = document.querySelector("#textInput");
let list = document.querySelector("#list");
let listItems = document.querySelectorAll(".listItem");

input.onkeyup = function () {
  let search = input.value;
  for (let item of listItems) {
    item.style.display = "block";
  }
  for (let item of listItems) {
    if (search === "") {
      item.style.display = "block";
    }
    if (item.innerText.indexOf(search) !== 0) {
      item.style.display = "none";
    }
  }
};
