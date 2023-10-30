# CONSEGNA
Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
[23, 65, 1, 4,78,15,....];
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di rosa e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

**Bonus** 
Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle

## Esecuzione
Quando l'utente clicca sul bottone "start": 
- [X] Generare un array di 16 numeri random non duplicati compresi nel range di gioco (da 1 a 100) corrispondenti alle 16 bombe
- [X] Definire il numero massimo di tentativi consentiti (100 - 16)
- [X] Generare l'array dei numeri che non corrispondono ad una bomba, cliccate dall'utente, per avere il punteggio
- [X] Mostrare la griglia
- [X] Creare le 100 celle del gioco, per ogni numero da 1 a 100:
    - [X] Creare la cella
    - [X] Inserire il numero all'interno della cella
    - [x] Aggiungere event listener "click" alla cella generata
    - [X] Aggiungere la cella alla griglia

Al click sulla cella della griglia: 
- [X] Leggere il numero cliccato
- [X] SE il numero cliccato è presente nell'array delle bombe 
    - [X] La cella diventa rossa
    - [X] Il gioco finisce - l'utente perde
- [X] ALTRIMENTI
    - [X] La cella diventa rosa
    - [X] SE questo numero non è stato già cliccato precedentemente
        - [X] Aggiungere il numero all'array dei numeri cliccati ("non bombe")
    - [X] SE la lunghezza dell'array di "non bombe" è uguale all'array del numero massimo di tentativi consentiti
        - [X] Il gioco finisce - l'utente vince 
        - [X] Viene stampato in pagina il messaggio di vittoria dell'utente e il numero di volte che l'utente ha cliccato su una cella senza bomba

Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle:
Al click sulla cella della griglia: 
- [X] Impostare una variabile globale gameOver che defiisca la fine del gioco
- [X] SE gameOver = true
    - [X] Fine del gioco - non eseguire altre istruzioni 
    - [X] Quando l'utente vince o perde
        - [X] Impostare gameOver = true; 