const clearFieldBtn = document.getElementById(
  "clearFields"
) as HTMLButtonElement;
const displayResultField = document.getElementById(
  "displayResult"
) as HTMLInputElement;
const equalBtn = document.getElementById("equal") as HTMLButtonElement;
const deleteBtn = document.getElementById("delete") as HTMLButtonElement;
const numericButtons = Array.from(
  document.querySelectorAll(".btn")
) as HTMLButtonElement[];

// functions and Listeners

function clearField(): void {
  displayResultField.value = "";
}
function deleteOneCharacter(): void {
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

function calculate(): void {
  try {
    if (displayResultField.value === "") {
      return;
    }

    let result: number | string = eval(displayResultField.value);

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

function keyboardHendler(event: KeyboardEvent): void {
  const key: string = event.key;
  const keyNumber: number = +key;
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
