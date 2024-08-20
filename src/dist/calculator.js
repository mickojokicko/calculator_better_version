"use strict";
const clearFieldBtn = document.getElementById("clearFields");
const displayResultField = document.getElementById("displayResult");
const equalBtn = document.getElementById("equal");
const deleteBtn = document.getElementById("delete");
const numericButtons = Array.from(document.querySelectorAll(".btn"));
// functions and Listeners
function clearField() {
  displayResultField.value = "";
}
function deleteOneCharacter() {
  displayResultField.value = displayResultField.value.slice(0, -1);
}
// -------------------------------
numericButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (
      button.innerText !== "AC" &&
      button.innerText !== "Del" &&
      button.innerText !== "="
    ) {
      displayResultField.value += button.innerText;
    }
  });
});
function calculate() {
  try {
    if (displayResultField.value === "") {
      return;
    }
    let result = eval(displayResultField.value);
    if (typeof result === "number" && !Number.isInteger(result)) {
      result = parseFloat(result.toFixed(3));
    }
    displayResultField.value = result.toString();
  } catch (err) {
    displayResultField.value = "Error, be careful 😮";
    setTimeout(() => {
      displayResultField.value = "0";
      clearField();
    }, 1200);
  }
}
function keyboardHendler(event) {
  const key = event.key;
  const keyNumber = +key;
  console.log(key, keyNumber);
  if (key === "Enter") {
    calculate();
  } else if (key === "Escape") {
    clearField();
  }
}
clearFieldBtn.addEventListener("click", clearField);
deleteBtn.addEventListener("click", deleteOneCharacter);
equalBtn.addEventListener("click", calculate);
document.addEventListener("keydown", keyboardHendler);
