let userClickedPattern = [];
let gamePattern = [];
let buttonColours = ["red", "yellow", "green", "blue"];
let levelTitle = document.getElementById('level-title');

let level = 0;
let started = false;


let randomBtn = $('.btn');
randomBtn.on("click", function(){
    let userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);

    btnAnimation(userChosenColour);
    soundKeySound(userChosenColour);

    checkAnswer(userClickedPattern.length-1);

});


function nextSequence() {
    userClickedPattern = [];

    let  randomNumber = (Math.floor(Math.random() * 4));
    
    let randomChosenColour  = buttonColours[randomNumber];
    console.log("Random color: "+randomChosenColour);
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);

    $("." +randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    soundKeySound(randomChosenColour);
    level++;
    levelTitle.innerText = "Level "+level;
    console.log("New user pattern now: "+userClickedPattern);
}



//event handling with a listener
document.addEventListener("keypress", function(){  
    if(!started){
        levelTitle.innerText = "Level "+level;
        nextSequence();
        started = true;
    }           
});


function soundKeySound(anyColor){
    switch (anyColor) {
        case 'red':
            let redBtnSound = new Audio('sounds/'+ anyColor +'.mp3');
                redBtnSound.play();
            break;
        case 'yellow':
            let yellowBtnSound = new Audio('sounds/'+ anyColor +'.mp3');
                yellowBtnSound.play();
            break;
        case 'green':
            let greenBtnSound = new Audio('sounds/'+ anyColor +'.mp3');
                greenBtnSound.play();
            break;
        case 'blue':
            let blueBtnSound = new Audio('sounds/'+ anyColor +'.mp3');
                blueBtnSound.play();
            break;
    
        default:
            console.log("nothing here");
            break;
    }
}

function btnAnimation(theRandomColor){
    let activeBtn = document.querySelector("."+theRandomColor);
    activeBtn.classList.add("pressed"); 
    
    setTimeout(function() {
        activeBtn.classList.remove("pressed"); 
    },100);
}


function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("current user pattern current level: "+userClickedPattern[currentLevel] );
        console.log("current game pattern current level: "+gamePattern[currentLevel] );

        if (userClickedPattern.length === gamePattern.length){
            console.log("current user pattern length: "+userClickedPattern.length);
            console.log("current game pattern length: "+gamePattern.length);

            setTimeout(function () {
                nextSequence();
                userClickedPattern = [];
              }, 2000);
        } else {
            console.log("length is not the same but you are in the else statement of the inner if statement and out now");
        }
        console.log("game pattern here: "+gamePattern);
        console.log("game pattern length here: "+gamePattern.length);
        console.log("user pattern here: "+userClickedPattern);
        console.log("user pattern length here: "+userClickedPattern.length); 
        console.log("completed the checking of index and length of the 2 if statements");

    } else {
        console.log("first, the value of the index is not the same for both comparison, so there's no need to check the inner if statement");
        let wrongBtn = new Audio('./sounds/wrong.mp3');
        wrongBtn.play();
        levelTitle.innerText = "Game Over, Press Any Key to Restart";
        let newStyle = document.querySelector('body');
        newStyle.classList.add("game-over");

        setTimeout(function () {
            newStyle.classList.remove("game-over");
        },200);
        startOver();
        console.log("wrong");
    }
}

function startOver() {
   level = 0;
   gamePattern = [];
   started = false;
}













