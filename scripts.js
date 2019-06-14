const container = document.querySelector("#main-container");

function createGrid() {
    for (let i = 0; i<256; i++) {
        let newSquare = document.createElement("div");
        newSquare.classList.add("grid-square");
        container.appendChild(newSquare);
        newSquare.addEventListener("mouseover", changeColor);
    }
}

function changeColor(e) {
    e.target.style.backgroundColor = "purple";
}

createGrid();