// DATI
const playBtn      = document.querySelector(".start-btn");
const gridElem     = document.querySelector(".grid");
const arrayNumbers = generateCellsNumber(100);

// ESECUZIONE

playBtn.addEventListener("click", handleClick);


/****************************/
// FUNZIONI
/****************************/

/**
 * Generare una cella della griglia con un numero all'interno
 * @param {number} Il numero inserito nella cella
 * @returns {any} Elemento HTML che rappresenta la cella
 */
function generateCell(innerNumber) {
    const newCell = document.createElement("div");
    newCell.classList.add("cell");
    newCell.innerHTML = innerNumber;
    return newCell;
}
//console.log(generateCell(92));

/**
 * Restituisce array di maxNumber numeri compresi tra 1 e maxNumber senza ripetizioni
 * @param {number} maxNumber
 * @returns {array}
 */
function generateCellsNumber(maxNumber) {
    const result = [];
    for (let i = 1; i <= maxNumber; i++) {
        result.push(i);
    }
    return result;
}
//console.log(generateCellsNumber(100));

function handleClick() {
    for (let i = 0; i < arrayNumbers.length; i++) {
        const curNumber = arrayNumbers[i];
        const curCell = generateCell(curNumber);
        curCell.addEventListener("click", function () {
            const clickedCell = parseInt(this.textContent);
            console.log(clickedCell);
            curCell.classList.toggle("clicked-cell");
        })
        gridElem.append(curCell);
    }
}