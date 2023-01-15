// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

const currentColor = document.getElementById('current-color');
const paletteColors = document.querySelectorAll('.color');

for (const paletteColor of paletteColors) {
  paletteColor.addEventListener('click', () => {
    currentColor.style.background = paletteColor.style.background;
  })
}

const cells = document.querySelectorAll('.cell');

for (const cell of cells) {
  cell.addEventListener('click', () => {
    cell.style.background = currentColor.style.background;
  })
}

const resetButton = document.createElement("button");
resetButton.setAttribute('type', "button");
resetButton.style.textAlign = "center";
resetButton.textContent = "Reset";
const palette = document.getElementById('palette');
palette.append(resetButton);

resetButton.addEventListener('click', () => {
  currentColor.style.background = "white";
  for (const cell of cells) {
    cell.style.background = "white";
  }
})
