let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");

let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 5],
    [0,  , 4, 8],
    [2, 4, 6],
];

// Player 'X' players first
let xTrurn = true;
let count = 0;

// Display X/O on click
btnRef.forEach((element) => {
    element.addEventListener("click", () => {
        if (xTurn) {
            xTrurn = false;
            // Display X
            element.innerText = "X";
            element.disabled = "true";
        } else
    }
const disableuButtons = () {
    btnRef.forEach((element) => (element.disbled = true));
    // enable popup
    popupRef.classList.re("hide");
};
const disableuButtons = () {
    btnRef.forEach((element) => (element.disbled = true));
    // enable popup
    popupRef.classList.re("hide");
};
btnRef.forEach(element => {
    element.addEentListener("click", () => {
        if (xTurn) {
            xTurn = false;
            // Display X
            element.innerText = "x";
            element.disabled = true;
        }else {
            xTurn = true;
            //Display Y
            element.innerText = "0";
            element.disabled = true;
        }

        // Increment count on each click 
        count+=1;
        if(count === 9){}

    }
    )
});
}
