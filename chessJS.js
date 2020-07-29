function generateBoard() {
    let table = document.getElementById('board');

    table.innerHTML = "";
    for (let i = 1; i <= 8; i++) {
        let tr = document.createElement('tr');
        for (let j = 1; j <= 8; j++) {
            let td = document.createElement('td');
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
}

generateBoard();
var start = 6;
var counter = document.getElementById('countdown');
var timer = setInterval(function () {

    start = start - 1;
    counter.innerHTML = start;

    if (start === 0) {
        counter.innerHTML = "";
        clearInterval(timer);
    }

}, 1000);

//timerFunc( 5 );

function generateFirstRow() {
    let table = document.getElementById("board");
    let firstRow = table.getElementsByTagName("tr")[0];
    let firstSquares = firstRow.childNodes;
    let firstRowPieces = ["&#9820;", "&#9822;", "&#9821;", "&#9819;", "&#9818;", "&#9821;", "&#9822;", "&#9820;"]
    for (y = 0; y < firstSquares.length; y++) {
        firstSquares[y].innerHTML = firstRowPieces[y];
    }
    return firstSquares;
}

setTimeout(generateFirstRow, 2000);


function generateSecondRow() {
    let table = document.getElementById("board"),
        row = table.getElementsByTagName("tr")[1];
    let squares = row.childNodes;
    for (let x = 0; x < squares.length; x++) {
        squares[x].innerHTML = "&#9823;";
    }
    return squares;

}

setTimeout(generateSecondRow, 2000);


function generateRow() {
    let table = document.getElementById("board"),
        row = table.getElementsByTagName("tr")[6];
    let squares = row.childNodes;
    for (let i = 0; i < squares.length; i++) {
        squares[i].innerHTML = "&#9817;";
    }
    return squares;


}

setTimeout(generateRow, 2000);


function generateLastRow() {
    let table = document.getElementById("board");
    let lastRow = table.getElementsByTagName("tr")[7];
    let lastSquares = lastRow.childNodes;
    let lastRowPieces = ["&#9814;", "&#9816;", "&#9815;", "&#9813;", "&#9812;", "&#9815;", "&#9816;", "&#9814;"]
    for (j = 0; j < lastSquares.length; j++) {
        lastSquares[j].innerHTML = lastRowPieces[j];
    }
    return lastSquares;
}

setTimeout(generateLastRow, 2000);


function startNewGame() {
    generateBoard();
    generateFirstRow();
    generateSecondRow();
    generateRow();
    generateLastRow();
}


