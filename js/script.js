// DATI
const playBtn      = document.querySelector(".start-btn");
const gridElem     = document.querySelector(".grid");
const arrayNumbers = generateCellsNumber(100);
const gridSize = 100; 
let exitMessage = document.getElementById("exit-result");
let score = 0;

// ESECUZIONE

playBtn.addEventListener("click", handleClick);

// Generare le bombe
const bombs = generateBombs(gridSize);
// Test - mi restituisce 16 numeri nel range (1-100)
console.log(bombs);

// Definire il numero massimo di tentativi consentiti (ovvero la dimensione della griglia - i 16 numeri corrispondenti alle bombe)
const maxClicks = gridSize - bombs.length; 
// console.log(maxClicks);

// Generare l'array dei numeri che non corrispondono ad una bomba
let bombFreeCells = []; 

// Impostare una variabile globale che defiisca la fine del gioco
let gameOver = false; 


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
            if (gameOver) {
                return;
            }
            if (bombs.includes(clickedCell)) {
                curCell.classList.add("clicked-bomb");
                console.log("Hai perso");
                exitMessage.innerHTML = `Peccato, hai perso! Ecco il tuo punteggio ${score}`;
                // Fine del gioco
                gameOver = true;
            } else {
                curCell.classList.add("clicked-cell");
                // Se il numero non è stato cliccato precedentemente, lo aggiungo all'array dei numeri cliccati (non bombe)
                if (!bombFreeCells.includes(clickedCell)) {
                    bombFreeCells.push(clickedCell);
                    // Incremento del punteggio
                    score++; 
                }
                console.log(bombFreeCells);
            }
            // Se la lunghezza dell'array di "non bombe" è uguale all'array del numero massimo di tentativi consentiti, il gioco finisce e l'utente vince
            if (bombFreeCells.length === maxClicks) {
                console.log("Hai vinto");
                exitMessage.innerHTML = `Complimenti, hai vinto! Ecco il tuo punteggio ${score}`;
                // Fine del gioco
                gameOver = true;
            }
        })
        gridElem.append(curCell);
    }
}



/**
 * Description Genera i numeri delle 16 bombe
 * @param {number} max
 * @returns {array} array di 16 numeri casuali senza ripetizioni compresi tra 1 e max
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  function generateBombs(max) {
    const result = [];
    while (result.length < 16) {
        const rndNumber = getRndInteger (1, max);
        if (!result.includes(rndNumber)) {
            result.push(rndNumber);
        }
    }
    return result;
  }
//   Test - devo aspettarmi 16 numeri random non ripetuti tra 1 e 100
//console.log(generateBombs(100));