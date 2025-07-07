

var robotName = window.prompt("robot name?");
var robotHealth = 100;
var robotAttack = 10;
var robotMoney = 10;

var friendNames = ["sam", "lo", "lau", "dee", "em",];
var friendHealth = 50;
var enemyAttack = 12;

// this creates a function 
var fight = function (friendName) {
    // repeat and execute as logn as friend-robot is alive 
    while(robotHealth > 0 && friendHealth > 0) {
        // ask a player if they would like to play game 
     var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
// if robot choose to skip 
     if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm if robot wants to skip 
       var confirmSkip =window.confirm("you sure you want to skip? it'll cost ya!");
        
        // if yes, leave fight
        if (confirmSkip) {
            window.alert(robotName + " skipped game, laters ");
            // subtract money from robot for skipping fight 
            robotMoney = robotMoney - 10;
            console.log("robotMoney", robotMoney);
            break;
        } 
    }
// if player chooses to play game, then fight 
    if (promptFight=== "fight" || promptFight === "FIGHT") {
    
    friendHealth = friendHealth - robotAttack;
    console.log(
        robotName + " attacked opponent. " + " " + friendName + " now has " + friendHealth + " health remaining. "
    );
// check friend health 
    if (friendHealth <= 0) {
        window.alert(friendName + ' died whoomppp');
        // award robot for winning game 
        robotMoney = robotMoney + 20;
        // leave while loop since friend is dead 
        break;
    } else {
        window.alert(friendName + " still in this with " + friendHealth + " points! ");
    }
    
    // Subtract the value of enemyAttack from the value of robotHealth and use that result to update robotHealth variable
    robotHealth = robotHealth - enemyAttack;
  // Log a resulting message to the console so we know that it worked.
    console.log(
        friendName + " attacked opponent. " + robotName + " now has " + robotHealth + " remaining for health. "
    );
    // condition check robot health 
    if (robotHealth <= 0) {
        window.alert(robotName + " died whompppp ");
    // leave while loop if robot is dead 
    break;
    } else {
        window.alert(robotName + " still in this with " + robotHealth + " points! ");
    }
    }
    }
};

// execute function 
for(var i = 0; i < friendNames.length; i++) {
    if (robotHealth > 0) {
    // let robot know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert("Welcome to a robot game...next up: Round " + (i + 1)); 
        
    } else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
  }
    
    var pickFriendName = friendNames[i];
    friendHealth = 50;

    
    // debugger;
 fight(friendNames[i]);


}
