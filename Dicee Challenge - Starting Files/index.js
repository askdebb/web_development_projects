

// images generation dataBase
var imageDB = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];


// playerOne to generation the number outcome
var playerOne = Math.floor(Math.random() * 6);
console.log("Player One: " + playerOne);

// playerTwo to generation the number outcome
var playerTwo = Math.floor(Math.random() * 6);
console.log("Player Two: " + playerTwo);

var playerOneName = prompt("Enter your name: ");
document.querySelector(".p1").innerHTML = playerOneName;

// function winnerDeterminer(p1, p2){
//     var winner;
//     return winner;
// }

if(playerOne < playerTwo){
    document.querySelector(".img1").setAttribute("src","./images/"+ imageDB[playerOne]);
    document.querySelector(".img2").setAttribute("src","./images/"+ imageDB[playerTwo]);
    document.querySelector("h1").innerHTML = "Sir Chris Wins";

    } 
    else if(playerOne > playerTwo){
    document.querySelector(".img1").setAttribute("src","./images/"+ imageDB[playerOne]);
    document.querySelector(".img2").setAttribute("src","./images/"+ imageDB[playerTwo]);
    document.querySelector("h1").innerHTML = playerOneName + ", Wins";

    }
    else {
        document.querySelector(".img1").setAttribute("src","./images/"+ imageDB[playerOne]);
        document.querySelector(".img2").setAttribute("src","./images/"+ imageDB[playerTwo]);
        document.querySelector("h1").innerHTML = "Draw";
    }


