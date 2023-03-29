
var wins = 0;
var losses = 0;
var ties = 0;
var continuePlaying = true;


//While loop to decide whether user wants to continue playing//


    //User Choice//
    function pickRPS() {
        var RPorS = prompt("Pick r, p, or s.", "r" );
        if (RPorS !== null || RPorS === "r" || RPorS === "p" || RPorS === "s") {
            window.alert("You picked " + RPorS);
            return RPorS;
        }
        else {
            window.alert("That is an invalid choice.");
        }
    }
    //function to generate random number//
    function getRndNum(length) {
        return Math.floor(Math.random() * length);
    }


    //Computer Choice //
    var computerSelections = ["r", "p", "s"];
    var computerPick;

    function computerChoice() {
        if (getRndNum(computerSelections.length) === 0) {
            window.alert("Computer chose Rock.");
            return computerPick = computerSelections[0];
        }

        else if (getRndNum(computerSelections.length) === 1) {
            window.alert("Computer chose Paper.");
            return computerPick = computerSelections[1];
        }

        else {
            window.alert("Computer chose Scissors.");
            return computerPick = computerSelections[2];
        }
    }


    //Compare User Choice vs Computer Choice and increase score counter//

    function comparePicks(userInput) {
        if (userInput === computerPick) {
            window.alert("It was a tie.");
            ties++;
        }
        else if (userInput === "r" && computerPick === "s") {
            window.alert("You won! Good job!");
            wins++;
        }
        else if (userInput === "p" && computerPick === "r") {
            window.alert("You won! Good job!");
            wins++;
        }
        else if (userInput === "s" && computerPick === "p") {
            window.alert("You won! Good job!");
            wins++;
        }
        else if (userInput === "r" && computerPick === "p") {
            window.alert("Oh no, you have lost!");
            losses++;
        }
        else if (userInput === "p" && computerPick === "s") {
            window.alert("Oh no, you have lost!");
            losses++;
        }
        else {
            window.alert("Oh no, you have lost!");
            losses++;
        }
    }

    //Showing scores//
function showScores() {
    window.alert
}
    

while (continuePlaying === true) {
    var pick = pickRPS();
    computerChoice();
    comparePicks(pick);
    showScores();
    

    //Ask user if they want to play again//
    if (window.confirm("Do you want to play again?")) {
        
    }
    else {
        window.alert("Thanks for playing!");
        continuePlaying = false;
    }
}