var buttonColours = ["red", "yellow", "green", "blue"];
var randomNumber = []; 
var gamePattern = [];


function nextSequence(){
    randomNumber = (Math.floor(Math.random() * 4));
    console.log(randomNumber);
    return randomNumber
}

let randomChosenColour =  nextSequence();
console.log(randomChosenColour);
