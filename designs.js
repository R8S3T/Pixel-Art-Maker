// Select color input
const colorInput = document.getElementById("colorPicker");

// Select size input
const canvas = document.getElementById("pixelCanvas");
const gridHeight = document.getElementById("inputHeight");
const gridWidth = document.getElementById("inputWidth");
const buttonInput = document.getElementById("sizePicker");

/* Submit button with reset function
ref: https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset */
buttonInput.addEventListener("submit", (e) => {
    e.preventDefault();
    makeGrid();
    document.getElementById("sizePicker").reset();
});

/* Refresh page to start over*/
function refreshPage() {
    window.location.reload();
}
/* Create color function to call later in makeGrid()*/
function color(e) {
    /* target = object which the event will be used for*/
    e.target.style.backgroundColor = colorInput.value;
}
// When size is submitted by the user, call makeGrid()
function makeGrid() {
    canvas.innerHTML = "";
    let height = gridHeight.value;
    let width = gridWidth.value;
    for (let h = 0; h < height; h ++) {
        /* Creates row with the first loop  */
        let row = canvas.insertRow(h);
        for (let w = 0; w < width; w ++) {
            /* Creates cell in the second loop and add it to the row */
            let cell = row.insertCell(w);

            /* Call color function here to access individual cells */
            cell.addEventListener("click", color);
            }
        }
        /* Append row with cells to canvas (table)*/
        canvas.appendChild(row);
    }
