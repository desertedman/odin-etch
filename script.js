const container = document.querySelector(".container");

let rows = 16;
let itmsPerRow = 16;
let divArray = [];  // index number corresponds to div id

let width = 860;  // total width of grid in pixels
let sqrSize = width / itmsPerRow; // size of square
let brdrSize = sqrSize * 1 / 4; // size of border

function configureGrid() {
  container.replaceChildren();
  divArray = []; // clear array

  // configure width
  sqrSize = width / itmsPerRow;
  brdrSize = sqrSize * (1 / 30);
  // if (brdrSize < 1) brdrSize = 0;
  console.log(`Size of each square: ${sqrSize}px`);
  console.log(`Size of border: ${brdrSize}px`);
  console.log(`Total width: ${sqrSize * itmsPerRow}px`);

  for (let i = 0; i < rows; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < itmsPerRow; j++) {
      const div = document.createElement("div");
      div.classList.add("item");

      div.style.width = `${sqrSize}px`;
      div.style.height = `${sqrSize}px`;
      div.style.borderWidth = `${brdrSize}px`;

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
  if (rows > 100) rows = 100;
  itmsPerRow = rows;

  console.log(`Setting rows to ${rows}`);

  configureGrid();
})

configureGrid();
