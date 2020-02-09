window.alert("You have 30 seconds to get as many points as possible!");
window.onload = game;
var userChoice = null;
var compChoice = null;
var compWinLose = null;
var userPoints = 0;
var userHighScore = 0;
var highscore = false;

// 30 second timer
function myTimer() {
    
var seconds = 30;
var downloadTimer = setInterval(function(){
    seconds--;
    document.getElementById("showTime").textContent = seconds;
    
    //end game if seconds == 0
    if (seconds <= 0)
    {
        clearInterval(downloadTimer);
        alert("You scored " + userPoints + " points.");
        $("img#userRock").hide();
        $("img#userPaper").hide();
        $("img#userScissors").hide();
        $("#compChoiceText").hide();
        $("#winlose").hide();
        $("#compPic").hide();
        $("#playAgain").show(); //show play again button when rounnd ends
        if(userPoints > userHighScore)
        {
            alert("You got a high score!")
            userHighScore = userPoints;
            displayHighscore(userPoints);
        }
        else
        {
           displayHighscore(userHighScore); 
        }
     
    }
}, 1000)}//end of myTimer function

//main function
function game(){
    
    //hide play again button at start of game
    $("#playAgain").hide();
    
    //if the user decides to play again, hide the highscore and show the rest
    $("#playAgain").click(function(){
        
        userPoints = 0;
        document.getElementById("showScore").textContent = userPoints;
        myTimer();
        $("#playAgain").hide();
        $("#highscore").hide();
        $("img#userRock").show();
        $("img#userPaper").show();
        $("img#userScissors").show();
        $("#compChoiceText").show();
        $("#winlose").show();
        $("#compPic").show();
            
    })
    
    //start timer
    myTimer();
        
    //let computer make choice first
    compChoice = computerChoice();
    compWinLose = computerWinOrLose();
        
    //if the user clicks rock
    $("img#userRock").click(function(){
    userChoice = "rock"
    $(".userChoice").removeClass("userChoice");
    $(this).addClass("userChoice");
    findWinner();
    compChoice = computerChoice();
    compWinLose = computerWinOrLose();
    })
     
    //if the user clicks paper
    $("img#userPaper").click(function(){
    userChoice = "paper"
    $(".userChoice").removeClass("userChoice");
    $("#userPaper").addClass("userChoice");
    findWinner();
    compChoice = computerChoice();
    compWinLose = computerWinOrLose();
    })
    
    //if the user clicks scissors
    $("img#userScissors").click(function(){
    userChoice = "scissors"
    $(".userChoice").removeClass("userChoice");
    $(this).addClass("userChoice");
    findWinner();
    compChoice = computerChoice();
    compWinLose = computerWinOrLose();
    })
                 
} // end of game function

//computers choice function
function computerChoice() {
    
    //comp choice
    var choice = ["rock", "paper", "scissors"];
    
    //pick random element for rps
    var randNum = Math.floor(Math.random()*choice.length);
    
    //display the computer picture
    document.getElementById("compPic").innerHTML = "<img src='images/" + choice[randNum] + ".png'/>";
    
    //display computers choice to win or lose 
    //document.getElementById("compChoiceText").innerHTML = "The computer chose: ";
    
    return choice[randNum];
}  

//function to determine if the CPU wants you to win or lose 
function computerWinOrLose() {
    
    //comp says to win or lose
    var winOrLose = ["Win", "Lose"];
    
    //pick win or lose randomly
    var randNum2 = Math.floor(Math.random()*winOrLose.length);
    
    //display computers choice to win or lose 
    document.getElementById("winlose").innerHTML = winOrLose[randNum2] + " against: "
    
    return winOrLose[randNum2];
}

//function to find the winner of the game
function findWinner() {
    
    if ((compChoice == "rock" && compWinLose == "Win") && userChoice == "paper")
    {
        userPoints += 10;
        displayPoints(userPoints);
    }
    
    if(compChoice == "rock" && compWinLose == "Win" && userChoice != "paper")
    {
       userPoints -= 20;
       displayPoints(userPoints);
    }
    
    if(compChoice == "rock" && compWinLose == "Lose" && userChoice == "scissors")
    {
        userPoints += 10;
        displayPoints(userPoints);
    }
    
    if(compChoice == "rock" && compWinLose == "Lose" && userChoice != "scissors")
    {
       userPoints -= 20;
       displayPoints(userPoints);
    }
    
    if (compChoice == "paper" && compWinLose == "Win" && userChoice == "scissors")
    {
        userPoints += 10;
        displayPoints(userPoints);
    }
    
    if(compChoice == "paper" && compWinLose == "Win" && userChoice != "scissors")
    {
       userPoints -= 20;
       displayPoints(userPoints);
    }
    
    if(compChoice == "paper" && compWinLose == "Lose" && userChoice == "rock")
    {
        userPoints += 10;
        displayPoints(userPoints);
    }
    
    if(compChoice == "paper" && compWinLose == "Lose" && userChoice != "rock")
    {
       userPoints -= 20;
       displayPoints(userPoints);
    }

    if (compChoice == "scissors" && compWinLose == "Win" && userChoice == "rock")
    {
        userPoints += 10;
        displayPoints(userPoints);
    }
    
    if(compChoice == "scissors" && compWinLose == "Win" && userChoice != "rock")
    {
       userPoints -= 20;
       displayPoints(userPoints);
    }
    
    if(compChoice == "scissors" && compWinLose == "Lose" && userChoice == "paper")
    {
        userPoints += 10;
        displayPoints(userPoints);
    }
    
    if(compChoice == "scissors" && compWinLose == "Lose" && userChoice != "paper")
    {
       userPoints -= 20;
       displayPoints(userPoints);
    }
}

//function to display points 
function displayPoints(points) {
    userPoints = points;
    document.getElementById("showScore").textContent = userPoints;
}

//function to display the high score
function displayHighscore(points){
    $("#highscore").show();
    document.getElementById("highscore").innerHTML = "High score: " + points;  
}



