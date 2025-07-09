var robotName = window.prompt("robot name?");
var robotHealth = 100;
var robotAttack = 10;
var robotMoney = 10;

var friendNames = ["sam", "lo", "lau", "dee", "em",];
var friendHealth = 50;
var friendAttack = 12;

// this creates a function 
// fight function (now with parameter; friend's name)
var fight = function (friendName) {
    // repeat and execute as logn as friend-robot is alive 
    while(robotHealth > 0 && friendHealth > 0) {
        // ask a player if they would like to play game 
     var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
         // if robot choose to skip 
     if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm if robot wants to skip 
       var confirmSkip = window.confirm("you sure you want to skip? it'll cost ya!");        
        // if yes, leave fight
        if (confirmSkip) {
            window.alert(robotName + " skipped game, laters ");
            // subtract money from robot for skipping fight 
            robotMoney = robotMoney - 10;
            console.log("robotMoney", robotMoney);
            break;
        } 
    }
    // remove friend's healthy by subtracting the amount in the robotAttache variable 
    // generate random damage value based on player's attack power
var damage = randomNumber(robotAttack - 3, robotAttack);

friendHealth = Math.max(0, friendHealth - damage);
    console.log(
        friendName + " now has " + friendHealth + "remaining"
    );
    // check friend health 
    if (friendHealth <= 0) {
        window.alert(friendName + ' died whoomppp');

        // award robot for winning game 
        robotMoney = robotMoney + 20;
        // leave while loop since friend is dead 
        break;
    }
    else {
        window.alert(friendName + "still has " + friendHealth + " left ");
    }

    // Subtract the value of friendAttack from the value of robotHealth and use that result to update robotHealth variable
  var damage = randomNumber(friendAttack - 3, friendAttack);

robotHealth = Math.max(0, robotHealth - damage);
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
};

// wrap in a start game function 
var startGame = function() { 
    // reset friend stats 
    friendHealth = randomNumber(40, 60); 
    friendAttack = 10;
    friendMoney = 10;
console.log(friendHealth);
    // fight each robot by looping over them and fighting them one at a time     
   for (var i = 0; i < friendNames.length; i++) {
      if (robotHealth > 0) {
           // let robot know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
        window.alert('Welcome to a boring robot game...this is: Round ' + (i + 1)); 

       // pick new friend to gith based on the index array 
        var pickFriendName = friendNames[i];

       //reset friendHealth before new round 
        friendHealth = 50; 

       //pass the pickFriendName variable value into fight function
        fight(pickFriendName); 

        // if we are not at the last friend in the array 
        if (robotHealth > 0 && i < friendNames.length -1) {
            var storeConfirm = window.confirm("the game is over,want to visit shop? ");
            // if yes, shop function 
            if (storeConfirm) {
                shop();

            }
        }
      }  
      else {
          window.alert("Your robot has died in this battle..... Game Over!");
         break;
        }
        
    }

    endGame();
};



var endGame = function () {
    window.alert("the game is over, score coming up");

    if (robotHealth > 0) {
        window.alert("you got a score of" + robotMoney + " ! ");
    } else {
        window.alert("you've lost");
    }

    // ask if robot would like to go again 
 var playAgain = window.confirm("play again?");
    
  if (playAgain) {
        startGame();
 } else {
    window.alert("see u later!");
}
};

// shop offer between rounds 
var shop = function () {
    // ask robot what they'd like to do 
    var shopOpPrompt = window.prompt ("refill, upgrade or leave?");

    switch (shopOpPrompt) {
        case "refill":
        case "REFILL": // new case ; for case sensitive values 
            //check to see if if robot has enough money 
            if (robotMoney >= 7) {window.alert("20 health for 9 dollars ");

            //incrase health and decrease money 
            robotHealth = robotHealth + 20;
            robotMoney = Math.max(0, robotMoney - 9);
        } else {
            window.alert("not enough money!");
        }
        break;
        case "upgrade":
        case "UPGRADE": // new case
            if (robotMoney >= 7) {
                window.alert("6 attack for 7 dollars");
            // incrase attack decrease money 
            robotAttack = robotAttack +6;
            robotMoney = robotMoney - 7;
        } 
        else { 
            window.alert("not enough money!");
        }
       break;
        case "leave":
        case "LEAVE": // new case
        window.alert("leave store");
        // do nothing 
        break;
    default: window.alert('not valid, try again');
    // call shop again for valid option 
    shop();
    break;
    }
};

var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value
}
// start first game when page loads
startGame();
