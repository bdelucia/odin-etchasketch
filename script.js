const container = document.querySelector(".container");
const button = document.querySelector("button");

let sideLength = 0;
let gridSize = 0;

function promptGridSize(){
    let gridSize = prompt("Please enter # of squares per side (1-100)");

    if (gridSize === null || isNaN(gridSize))
        return promptGridSize();

    gridSize = parseInt(gridSize);

    if (gridSize <= 0 || gridSize > 100)
        return promptGridSize();

    return gridSize;
}

button.addEventListener("click", () => {
    // Deletes previous squares if any
    if(gridSize && sideLength !== 0)
    {
        const previousSquares = container.querySelectorAll('*');
        previousSquares.forEach((square) => {
            square.remove();
        })
    }


    gridSize = promptGridSize();
    sideLength = 900 / gridSize;

    for (let i = 0; i < gridSize; i++)
    {
        for(let j = 0; j < gridSize; j++)
        {

            const square = document.createElement("div");

            square.style.width = sideLength + "px";
            square.style.height = sideLength + "px";
            square.style.border = "1px solid black";

            container.appendChild(square);
        }
    }
    const squares = container.querySelectorAll('*');
    let startingOpacity = 0.1;

    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            let randomRed = Math.floor(Math.random() * 256);
            let randomGreen = Math.floor(Math.random() * 256);
            let randomBlue = Math.floor(Math.random() * 256);
            square.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
        })
    })
})
