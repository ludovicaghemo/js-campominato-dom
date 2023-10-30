# CONSEGNA
Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
[23, 65, 1, 4,78,15,....];
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di rosa e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

## Esecuzione
Quando l'utente clicca sul bottone "start": 
- [] Generare un array di 16 numeri random non duplicati compresi nel range di gioco (da 1 a 100) corrispondenti alle 16 bombe
- [] Definire il numero massimo di tentativi consentiti (100 - 16)
- [] Generare l'array dei numeri che non sono bombe, cliccate dall'utente, per avere il punteggio
- [X] Mostrare la griglia
- [] Creare le 100 celle del gioco, per ogni numero da 1 a 100:
    - [X] Creare la cella
    - [X] Inserire il numero all'interno della cella
    - [x] Aggiungere event listener "click" alla cella generata
    - [X] Aggiungere la cella alla griglia

Al click sulla cella della griglia: 
- [X] Leggere il numero cliccato
- [] SE il numero cliccato è presente nell'array delle bombe 
    - [] La cella diventa rossa
    - [] Il gioco finisce - l'utente perde
- [] ALTRIMENTI
    - [] La cella diventa rosa
    - [] SE questo numero non è stato già cliccato precedentemente
        - [] Aggiungere il numero all'array dei numeri cliccati ("non bombe")
    - [] SE la lunghezza dell'array di "non bombe" uguale all'array del numero massimo di tentativi consentiti
        - [] Il gioco finisce - l'utente vince 


