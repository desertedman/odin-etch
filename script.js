const container = document.querySelector(".container");

let rows = 16;
let itmsPerRow = 16;
let divArray = [];  // index number corresponds to div id

let width = 800;  // total width of grid in pixels
let sqrSize = width / itmsPerRow; // size of square

console.log(`Size of each square: ${sqrSize}px`);

function configureGrid() {
  container.replaceChildren();
  divArray = []; // clear array

  // configure width
  sqrSize = width / itmsPerRow;

  for (let i = 0; i < rows; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < itmsPerRow; j++) {
      const div = document.createElement("div");
      div.classList.add("item");

      div.style.width = `${sqrSize}px`;
      div.style.height = `${sqrSize}px`;

      divArray.push(div);
      row.appendChild(div);
    }

    container.appendChild(row);
  }

  divArray.forEach((item) => {
    item.addEventListener("mouseenter", () => item.style.backgroundColor = "gray");
  });
}

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  rows = prompt("How many squares per axis? (e.g. 16 for a 16x16 grid", 16);
  itmsPerRow = rows;

  configureGrid();
})

configureGrid();
