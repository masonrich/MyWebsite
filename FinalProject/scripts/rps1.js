

    window.onload = game;

    //variables for the gane
    var rock = document.getElementById("userRock"); // rock pic
    var paper = document.getElementById("userPaper"); // paper pic 
    var scissors = document.getElementById("userScissors"); // scissors pic 
    var userChoice = null;
    var compChoice = null;
    var userWins = 0;
    var compWins = 0;
    do{
          numberRounds = parseInt(prompt("How many rounds would you like to play?"));
      } while (numberRounds <= 0||isNaN(numberRounds) == true)
    var roundNum = 0;
    

    function game(){
        
        //hide next round and results
        $("#nextRound").hide();
        $("#results").hide();
        $("#gameOver").hide();

        //keep track of rounds
        countRounds();
        $("#makeChoice").show();
        document.getElementById("makeChoice").innerHTML = "Make your choice: ";
         
            //if user clicks rock
            rock.onclick = function(){
                userChoice = "rock";
                displayUserChoice();
                compChoice = computerChoice();
                findWinner();
                hidePics();
            }
            
            //if user clicks paper
            paper.onclick = function(){
                userChoice = "paper";
                displayUserChoice();
                compChoice = computerChoice();
                findWinner();
                hidePics();

            }
            
            //if user clicks scissors
            scissors.onclick = function(){
                userChoice = "scissors";
                displayUserChoice();
                compChoice = computerChoice();
                findWinner();
                hidePics();

            }
  
    }
    
//computers choice function
function computerChoice() {
    var choice = ["rock", "paper", "scissors"];
    var randNum = Math.floor(Math.random()*choice.length);
    $("#compChoiceText").show();
    $("#compPic").show();
    document.getElementById("compPic").innerHTML = "<img src='images/" + choice[randNum] + ".png'/>";
    document.getElementById("compChoiceText").innerHTML = "CPU chose: "
    return choice[randNum];
}  

//display user choice picture and text
function displayUserChoice() {
    $("#userChoiceText").show();
    $("#userPic").show();
    document.getElementById("userChoiceText").innerHTML = "You chose: "
    document.getElementById("userPic").innerHTML = "<img src='images/" + userChoice + ".png'/>";
}

//display count of round number
function countRounds(){
    roundNum++;
    document.getElementById("countRounds").innerHTML="Round " + roundNum + "/" + numberRounds;
}

//determine the winner
function findWinner(){
    if (userChoice == compChoice)
    {
        document.getElementById("results").innerHTML = "It's a tie.";
    }
    if (userChoice == "rock" && compChoice == "scissors")
    {
        document.getElementById("results").innerHTML = "You win!! ";
        ++userWins;
    }
    if (userChoice == "paper" && compChoice == "rock")
    {
        document.getElementById("results").innerHTML = "You win!!";
        ++userWins;
    }
    if (userChoice == "scissors" && compChoice == "paper")
    {
        document.getElementById("results").innerHTML = "You win!!"
        ++userWins;
    }
    if (userChoice == "rock" && compChoice == "paper") 
    {
        document.getElementById("results").innerHTML = "You lose."
        ++compWins;
    }
    if (userChoice == "paper" && compChoice == "scissors") 
    {
        document.getElementById("results").innerHTML = "You lose."
        ++compWins;
    }
    if (userChoice == "scissors" && compChoice == "rock") 
    {
        document.getElementById("results").innerHTML = "You lose."
        ++compWins;
    }
    
    $("#nextRound").show();
    $("#results").show();
    
    //end the game after the number of rounds
    if (roundNum == numberRounds)
    {
        if (userWins > compWins)
        {
            gameIsOver();
            document.getElementById("score").innerHTML = "YOU WON!<br>user wins: " + userWins + "<br>computer wins: " + compWins;
        }
        else if (userWins < compWins)
        {
            gameIsOver();
            document.getElementById("score").innerHTML = "YOU LOST...<br>user wins: " + userWins + "<br>computer wins: " + compWins;
        }
        else 
        {
            gameIsOver();
            document.getElementById("score").innerHTML = "YOU TIED...<br>user wins: " + userWins + "<br>computer wins: " + compWins;
        }
        
        //remove the images and unnecessary content after the final round
        $("#results").remove();
        $("#compChoiceText1").hide();
        $("#compChoiceText1").hide();
        $("#makeChoice").hide();
        $("#nextRound").hide();

    }
       
}

//function when user clicks next round
function nextRound() {
    $("#compChoiceText").hide();
    $("#userChoiceText").hide();
    $("#userPic").hide()
    $("#compPic").hide()
    showPics();
    game();
}

//function to hide pics out of the way
function hidePics(){
   $("#makeChoice").hide();
   $("#userRock").hide();
   $("#userPaper").hide();
   $("#userScissors").hide();
}

//function to display appropriate pics
function showPics(){
   $("#userRock").show();
   $("#userPaper").show();
   $("#userScissors").show();
}

//get the user to place a bet
function getNumRounds(){
    
        do{
            numberRounds = parseInt(prompt("How many rounds would you like to play?"));
        } while (numberRounds <= 0||isNaN(userBet) == true)
}

//show that the game is over
function gameIsOver(){
    $("#gameOver").show();
    document.getElementById("gameOver").innerHTML = "GAME OVER"
}


