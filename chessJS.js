var whitePieces = {
    "K": "&#9812;",
    "Q": "&#9813;",
    "R": "&#9814;",
    "B": "&#9815;",
    "N": "&#9816;",
    "P": "&#9817;"
};
var blackPieces = {
    "K": "&#9818;",
    "Q": "&#9819;",
    "R": "&#9820;",
    "B": "&#9821;",
    "N": "&#9822;",
    "P": "&#9823;"
};
var clickedSquare = null;


function generateBoard() {
    let table = document.getElementById('board');

    table.innerHTML = "";
    for (let i = 1; i <= 8; i++) {
        let tr = document.createElement('tr');
        for (let j = 1; j <= 8; j++) {
            let td = document.createElement('td');
            tr.appendChild(td);
            td.setAttribute("data-x", i);
            td.setAttribute("data-y", j);
            td.addEventListener("click", highlight, false);
        }

        table.appendChild(tr);
    }


}

function generateFirstRow() {
    let table = document.getElementById("board");
    let firstRow = table.getElementsByTagName("tr")[0];
    let firstSquares = firstRow.childNodes;
    let firstRowPieces = ["&#9820;", "&#9822;", "&#9821;", "&#9819;", "&#9818;", "&#9821;", "&#9822;", "&#9820;"]
    for (let y = 0; y < firstSquares.length; y++) {
        firstSquares[y].innerHTML = firstRowPieces[y];
        firstSquares[y].setAttribute('data-key', getKeyByValue(blackPieces, firstRowPieces[y]));
    }
    return firstSquares;
}

function generateSecondRow() {
    let table = document.getElementById("board"),
        row = table.getElementsByTagName("tr")[1];
    let squares = row.childNodes;
    for (let x = 0; x < squares.length; x++) {
        squares[x].innerHTML = "&#9823;";
        squares[x].setAttribute('data-key', 'P');
    }
    return squares;

}

function generateRow() {
    let table = document.getElementById("board"),
        row = table.getElementsByTagName("tr")[6];
    let squares = row.childNodes;
    for (let i = 0; i < squares.length; i++) {
        squares[i].innerHTML = "&#9817;";
        squares[i].setAttribute('data-key', 'P');
    }
    return squares;


}

function generateLastRow() {
    let table = document.getElementById("board");
    let lastRow = table.getElementsByTagName("tr")[7];
    let lastSquares = lastRow.childNodes;
    let lastRowPieces = ["&#9814;", "&#9816;", "&#9815;", "&#9813;", "&#9812;", "&#9815;", "&#9816;", "&#9814;"]
    for (j = 0; j < lastSquares.length; j++) {
        lastSquares[j].innerHTML = lastRowPieces[j];
        lastSquares[j].setAttribute('data-key', getKeyByValue(whitePieces, lastRowPieces[j]));
    }
    return lastSquares;
}

function generateRows() {
    generateFirstRow();
    generateSecondRow();
    generateRow();
    generateLastRow();
}

function initCounter() {
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
}

function highlight(event) {

    if (event.target.innerHTML !== "") {
        event.target.style.backgroundColor = "yellow";
    }


    let cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {

        if (cells[i] !== event.target && event.target.style.backgroundColor === "yellow") {
            cells[i].style.backgroundColor = "";
        }
    }

    if (clickedSquare !== null && clickedSquare.innerHTML !== "") {
        event.target.innerHTML = clickedSquare.innerHTML;
        clickedSquare.innerHTML = "";
        clickedSquare.style.backgroundColor = '';
        //clickedSquare = null;
    } else {
        clickedSquare = event.target;
    }


}

function extract(event) {
    let chessSymbols = Object.keys(whitePieces);

    if (chessSymbols.indexOf(event.key) !== -1) {

        let cells = document.getElementsByTagName("td");
        for (let i = 0; i < cells.length; i++) {

            if (cells[i].getAttribute('data-key') === event.key) {
                cells[i].style.backgroundColor = "yellow";
            }

        }
    }

}

document.onkeydown = function (event) {
    if (event.code === "ArrowUp") {

        var firstC = clickedSquare.getAttribute("data-x");
        var secondC = clickedSquare.getAttribute("data-y");
        var newFirstC = parseInt(firstC) - 1;
        var newSecondC = parseInt(secondC);

        let cells = document.getElementsByTagName("td");
        for (let i = 0; i < cells.length; i++) {
            var x = cells[i].getAttribute("data-x");
            var y = cells[i].getAttribute("data-y");

            if (parseInt(x) === newFirstC && parseInt(y) === newSecondC) {
                cells[i].innerHTML = clickedSquare.innerHTML;
                clickedSquare.innerHTML = "";
                clickedSquare.style.backgroundColor = "";
            }
        }
        return false;
    }
}


function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function startNewGame() {
    generateBoard();
    generateRows();
    initCounter();
}

initCounter();
generateBoard();
setTimeout(generateRows, 2000);

document.onkeyup = extract;











