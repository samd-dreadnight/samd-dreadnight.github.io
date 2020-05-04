var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var newColors = document.querySelector("#newColors");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var pickedColor = pickColor();
var numSquares = 6;

newColors.addEventListener("click", function () {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    newColors.textContent = "Reset Colors";
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "rgba(30.7,30.7,30.7,1.0)"

    for (var i = 0; i < squares.length; i++) {
        //add initial colors to squares
        squares[i].style.backgroundColor = colors[i];
    }
});

easyBtn.addEventListener("click", function () {
    numSquares = 3;
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function () {
    numSquares = 6;
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for (i = 0; i < squares.length; i++) {
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
    }

});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //click listeners to squares
    squares[i].addEventListener("click", function () {
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to picked color
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Winner!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            newColors.textContent = "Play Again?";
        }
        else {
            this.style.backgroundColor = "rgba(30.7,30.7,30.7,0.0)";
            messageDisplay.textContent = "Nope.. Try Again!";
        }
    });
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = []
    //add num random colors to array
    for (var i = 0; i < num; i++) {
        //ger random color and push into arr
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor() {
    //pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256)
    //pick a "green"
    var g = Math.floor(Math.random() * 256)
    //pick a "blue"
    var b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}