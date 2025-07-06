

var robotName = window.prompt("robot name?");
var robotHealth = 100;
var robotAttack = 10;
var robotMoney = 10;

var enemyName = "g";
var enemyHealth = 50;
var enemyAttack = 12;


// this creates a function 
var fight = function () {
    // allert players the game is starting 
    window.alert("game time!");
// ask a player if they would like to play game 
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
// if player chooses to play game, then fight 
    if (promptFight=== "fight" || promptFight === "FIGHT") {
    enemyHealth = enemyHealth - robotAttack;
    console.log(
        robotName + " attacked opponent. " + " " + enemyName + " now has " + enemyHealth + " health remaining. "
    );
// check enemy health 
    if (enemyHealth <= 0) {
        window.alert(enemyName + " died whooomp ");
    }
    else {
        window.alert(enemyName + " still in this with " + enemyHealth + " points! ");
    }
    
    // Subtract the value of enemyAttack from the value of robotHealth and use that result to update robotHealth variable
    robotHealth = robotHealth - enemyAttack;
  // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked opponent. " + robotName + " now has " + robotHealth + " remaining for health. "
    );
    // condition check robot health 
    if (robotHealth <= 0) {
        window.alert(robotName + " died whompppp ");
    }
    else {
        window.alert(robotName + " still in this with " + robotHealth + " points! ");
    }
// if robot choose to skip 
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm if robot wants to skip 
        var confirmSkip =window.confirm("you sure you want to skip? it'll cost ya!");
        // if yes, leave fight
        if (confirmSkip) {
            window.alert(robotName + " skipped game, laters ");
            robotMoney = robotMoney - 2;
        } 
        // if no, ask again if robot would like to play by running function again 
        else {
            fight();
        }
    // window.alert(" okay " + robotName + " you clearly don't want to play! you chose to skip this round! ");
    } else {
        window.alert("please choose a valid option!");
    }
   
}

// execute function 
fight();
