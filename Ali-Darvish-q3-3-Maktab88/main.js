let input = document.querySelector("#tInput");

input.onkeyup = function (event) {
  let split = input.value.split("");
  let newSplit = split.map((char) => {
    if (char == "." || char == "-") {
      return (char = "_");
    } else {
      return char;
    }
  });
  console.log(newSplit);
  input.value = newSplit.join("");
};
