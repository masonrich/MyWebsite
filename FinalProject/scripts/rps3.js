//all variables used for the program
window.onload = game; // start the game
var rock = document.getElementById("userRock"); // rock pic
var paper = document.getElementById("userPaper"); // paper pic 
var scissors = document.getElementById("userScissors"); // scissors pic 
var userPic = document.getElementById("userPic"); // div for user choice
var compPic = document.getElementById("compPic"); //div for comp choice
var userChoiceText = document.getElementById("userChoiceText"); //display text "You chose"
var compChoiceText = document.getElementById("compChoiceText"); //display text "CPU chose:"
var result = document.getElementById("results"); // display results 
var rounds = document.getElementById("countRounds"); //display round number with this.
var roundNum = 0;
var numRounds = 9;
var userChoice = null;
var compChoice = null;
var userMoney = 100; //user starts off with $100
var userBet = 0;
var wallet = document.getElementById("wallet"); //display user money
var makeChoice = document.getElementById("makeChoice");
var nextRound = document.getElementById("nextRound");
var userHighScore = 0;
var highScore = document.getElementById("highScore");
var gameOver = document.getElementById("gameOver");
var userTie = false;
var userBetTie;
var choice = ["rock", "paper", "scissors", "rock", "paper", "scissors", "rock", "paper", "scissors"];

//main function 
function game() {
    
    countRounds(); //keep track of rounds
    getUserBet();  // get user to bet
    showPics(); 
    $("#gameOver").hide();
    $("#nextRound").show();      //hide everything that doesnt need to be shown
    $("#makeChoice").show();
    $("#userPic").hide();
    $("#compPic").hide();
    $("#newHighScore").hide();
    $("#highScore").hide();
    $("#compChoiceText").hide();
    $("#userChoiceText").hide();
    $("#results").hide();
    
    //if the user clicks on rock
    rock.onclick = function(){
        userChoice = "rock";    
        displayUserChoice();
        computerChoice();
        $("#userPic").show();
        $("#compPic").show();
        findWinner();
        hidePics();     
    }
    
    //if the user clicks on paper
    paper.onclick = function(){
        userChoice = "paper"   
        displayUserChoice();
        computerChoice();
        $("#userPic").show();
        $("#compPic").show();
        findWinner();
        hidePics(); 
    }
    
    //if the user clicks on scissors 
    scissors.onclick = function(){
        userChoice = "scissors"    
        displayUserChoice();
        computerChoice();
        $("#userPic").show();
        $("#compPic").show();
        findWinner();
        hidePics();
    }
    
}  // end of game() function

//display count of round number
function countRounds(){
    roundNum++;
    rounds.innerHTML="Round " + roundNum + "/" + 9;
}

//display the user wallet
function displayUserWallet(){
    wallet.innerHTML = "You have $" + userMoney;
}

//get the user to place a bet
function getUserBet(){
    
    //if there was not a tie
    if (userTie == false)
    {
        do{

            userBet = parseInt(prompt("Place your bet: (You have $" + userMoney + ")"));
        } while ((userBet > userMoney)||(userBet < 0)||isNaN(userBet) == true)
    }
    
    // if there was a tie
    else if (userTie == true){
       if (userBetTie*2 < userMoney)
       {
           do{
                userBet = parseInt(prompt("Place your bet. Since there was a tie last round, you must at least double the bet, which would be $" + userBetTie*2 + ". If you don't have that much, you must go all in. ($" + userMoney + ")"));
             } while ((userBet < userBetTie*2)||(userBet > userMoney)||(userBet < 0)||(isNaN(userBet) == true))
       }
       
       //if the user doesnt have enough money, they must go all in
       else if ( userBetTie*2 > userMoney)
       {

          do{
               userBet = parseInt(prompt("Place your bet. Since there was a tie last round, you must at least double the bet, which would be $" + userBetTie*2 + ". If you don't have that much, you must go all in. ($" + userMoney + ")"));
            } while (userBet != userMoney)
       }
         //set user tie back to false
         userTie = false;
         
    } 
}

//display user choice picture and text
function displayUserChoice() {
    userChoiceText.innerHTML = "You chose: "
    userPic.innerHTML = "<img src='images/" + userChoice + ".png'/>";
}

//find and display the computers choice
function computerChoice() {
    
    var randNum = Math.floor(Math.random()*choice.length);
    compPic.innerHTML = "<img src='images/" + choice[randNum] + ".png'/>";
    $("compChoiceText").show();
    compChoiceText.innerHTML = "CPU chose: "
    //compChoice = choice[randNum];
    //var x = choice.splice(randNum, 1);
    //console.log(x);
    compChoice = choice.splice(randNum, 1);
    console.log(compChoice);
}

//function to find the winner of the game        
function findWinner(){
    $("#results").show();
    $("#userChoiceText").show();
    $("#compChoiceText").show();
    
    if (userChoice == "rock" && compChoice == "rock")
    {
        userTie = true;
        userBetTie = userBet;
        userMoney += 0;
        result.innerHTML = "It's a tie";
    }
    else if(userChoice == "paper" && compChoice == "paper")
    {
        userTie = true;
        userBetTie = userBet;
        userMoney += 0;
        result.innerHTML = "It's a tie";
    }
    else if(userChoice == "scissors" && compChoice == "scissors")
    {
        userTie = true;
        userBetTie = userBet;
        userMoney += 0;
        result.innerHTML = "It's a tie";
    }
    else if (userChoice == "rock" && compChoice == "scissors")
    {
        userMoney += userBet;
        result.innerHTML = "You win!! ";
    }
    else if (userChoice == "paper" && compChoice == "rock")
    {
        userMoney += userBet;
        result.innerHTML = "You win!!";
    }
    else if (userChoice == "scissors" && compChoice == "paper")
    {
        userMoney += userBet;
        result.innerHTML = "You win!!"
    }
    else if (userChoice == "rock" && compChoice == "paper") 
    {
        userMoney -= userBet;
        result.innerHTML = "You lose"
    }
    else if (userChoice == "paper" && compChoice == "scissors") 
    {
        userMoney -= userBet;
        result.innerHTML = "You lose"
    }
    else if (userChoice == "scissors" && compChoice == "rock") 
    {
        userMoney -= userBet;
        result.innerHTML = "You lose"
    }
    
    //if the user runs out of money
    if (userMoney == 0)
    {
        $("#gameOver").show();
        gameOver.innerHTML = "GAME OVER. YOU RAN OUT OF MONEY...";
        $("#nextRound").hide();
        $("#makeChoice").hide();
        $("#highScore").show();
        highScore.innerHTML = "High Score: " + userHighScore;
    }

    //if its the last round
    if(roundNum == 9)
    {
        $("#nextRound").hide();
        //nextRound.style.display = "none";
        $("#gameOver").show();
        gameOver.innerHTML = "-GAME OVER-";
        $("#makeChoice").hide();
        //makeChoice.style.display = "none";
        
        if(userMoney > userHighScore)
        {
            userHighScore = userMoney;
            $("#newHighScore").show();
            $("#newHighScore").empty();
            $("#newHighScore").append("YOU GOT A HIGH SCORE!");
        }
        
        //display the high score
        $("#highScore").show();
        highScore.innerHTML = "High Score: " + userHighScore; 
        userTie = false;
    }
    
    //show how much the user has
    displayUserWallet();
    
    makeChoice.innerHTML = "Make another choice:";
     
}

//function to hide unnecessary pics
function hidePics(){
    $("#userRock").hide();
    $("#userPaper").hide();
    $("#userScissors").hide();
}

//function to show pics 
function showPics(){
    $("#userRock").show();
    $("#userPaper").show();
    $("#userScissors").show();
} 

//if the user clicks on new game button, set array back to full length
function newGame(){
   //set round back to 1 and money to 100
   choice = ["rock", "paper", "scissors", "rock", "paper", "scissors", "rock", "paper", "scissors"];
   roundNum = 0;
   userMoney = 100;
   displayUserWallet();
   game();
}


