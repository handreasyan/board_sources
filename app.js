const board = document.querySelector("#board");
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", (event) => setColor(square));
  square.addEventListener("mouseleave", (event) => removeColor(square));
  board.append(square);
}
function setColor(el) {
  const color = `${grc()},${grc()},${grc()}`;
  el.style.backgroundColor = `rgb(${color})`;
  el.style.boxShadow = "0 0 2px " + color;
}
function removeColor(el) {
  el.style.backgroundColor = "#1d1d1d";
  el.style.boxShadow = "0 0 2px #000";
}

const grc = () => Math.floor(Math.random() * 252);
