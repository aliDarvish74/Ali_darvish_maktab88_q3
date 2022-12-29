let londonBtn = document.querySelector("#londonBtn");
let tehranBtn = document.querySelector("#tehranBtn");
let tokypBtn = document.querySelector("#tokypBtn");
let cityName = document.querySelector("#cityName");
let description = document.querySelector("#description");

londonBtn.onclick = () => {
  cityLogger("London", "England");
  tehranBtn.classList.remove("active");
  tokypBtn.classList.remove("active");
  londonBtn.classList.add("active");
};
tehranBtn.onclick = () => {
  cityLogger("Tehran", "Iran");
  tokypBtn.classList.remove("active");
  londonBtn.classList.remove("active");
  tehranBtn.classList.add("active");
};
tokypBtn.onclick = () => {
  cityLogger("Tokyo", "Japan");
  tehranBtn.classList.remove("active");
  londonBtn.classList.remove("active");
  tokypBtn.classList.add("active");
};

function cityLogger(inputName, country) {
  cityName.innerText = inputName;
  description.innerText = `${inputName} is the capital city of ${country}`;
}
