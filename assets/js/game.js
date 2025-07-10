
// function to generate random numeric value 
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};
// this creates a function 
// fight function (now with parameter; friend's name)
var fight = function (friend) {
    while(robotInfo.health > 0 && friend.health > 0) {
        // ask a player if they would like to play game 
     var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
         // if robot choose to skip 
     if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm if robot wants to skip 
       var confirmSkip = window.confirm("you sure you want to skip? it'll cost ya!");        
        // if yes, leave fight
        if (confirmSkip) {
            window.alert(robotInfo.name + " skipped game, laters ");
            // subtract money from robot for skipping fight 
            robotInfo.money = robotInfo.money - 10;
            console.log("robotInfo.money", robotInfo.money);
            break;
        } 
    }
    // generate random damage value based on player's attack power
var damage = randomNumber(robotInfo.attack - 3, robotInfo.attack);
friend.health = Math.max(0, friend.health - damage);
    console.log(
        robotInfo.name + " now has " + friend.health + "remaining"
    );
    // check friend health 
    if (friend.health <= 0) {
        window.alert(friend.name + ' died whomp');

        // award robot for winning game 
        robotInfo.money = robotInfo.money + 20;
        // leave while loop since friend is dead 
        break;
    } else {
        window.alert(friend.name + "still has " + friend.health + " left ");
    }
    // Subtract the value of friend.attack from the value of robotInfo.health and use that result to update robotInfo.health variable
  var damage = randomNumber(friend.attack - 3, friend.attack);
 robotInfo.health = Math.max(0, robotInfo.health - damage);
  // Log a resulting message to the console so we know that it worked.
    console.log(
        friend.name + " attacked opponent. " + robotInfo.name + " now has " + robotInfo.health + " remaining for health. "
    );
    // condition check robot health 
    if (robotInfo.health <= 0) {
        window.alert(robotInfo.name + " died whompppp ");
    // leave while loop if robot is dead 
    break;
    } else {
        window.alert(robotInfo.name + " still in this with " + robotInfo.health + " points! ");
    }
  } // end of while loop 
}; // end of fight function 

// wrap in a start game function 
var startGame = function() { 
    // reset player stats 
    robotInfo.reset();
    // fight each robot by looping over them and fighting them one at a time     
   for (var i = 0; i < friendInfo.length; i++) {
    if (robotInfo.health > 0) {
           // let robot know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
        window.alert('Welcome to a boring robot game...this is: Round ' + (i + 1)); 
       // pick new friend to fight based on the index array 
        var pickFriendObj = friendInfo[i];
    // set health for friend 
    pickFriendObj.health = randomNumber(40, 60); 
       //pass the pickfriend.name variable value into fight function
        fight(pickFriendObj); 
        // if we are not at the last friend in the array 
        if (robotInfo.health > 0 && i < friendInfo.length -1) {
    
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
  // after loop ends, we are either out of robot.health or friends to fight, so run the endGame function

    endGame();
};

var endGame = function () {
    window.alert("the game is over, score coming up");

    if (robotInfo.health > 0) {
        window.alert("you got a score of" + robotInfo.money + " ! ");
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
        robotInfo.refillHealth();
        break;
        case "upgrade":
        case "UPGRADE": // new case
        robotInfo.upgradeAttack();
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

/* END GAME FUNCTIONS */
/* GAME INFORMATION / VARIABLES */

var getRobotName = function () {
    var name = "";

    while (name === "" || name === null)
 {
    name = prompt("what would you like your robot's name to be?");
 }
    console.log("your robot's name is " + name);
    return name;

};

// player information

var robotInfo = {
  name: getRobotName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health =100;
    this.money = 10; 
    this.attack = 10;
  }, 
  refillHealth: function() {
    if (this.money >= 7) {
    window.alert("Refilling robot's health by 20 for 7 buckos.");
    this.health += 20;
    this.money -= 7;
  } else {
    window.alert("You don't have enough buckos!");
   }
  }, 
  upgradeAttack: function() {
    if (this.money >= 7) {
    window.alert("Upgrading robot's attack by 6 for 7 buckos.");
    this.attack += 6;
    this.money -= 7;
  }
  else {
    window.alert("You don't have enough buckos!");
  }
 }
};



var friendInfo = [
    {
        name: "em",
        attack: 24
    },
    {
        name: "dee",
        attack: 26
    },
    {
        name: "lau",
        attack: 28
    },
    {
        name: "lo",
        attack: 30
    },
    {
        name: "sam",
        attack: 32
    }
];
// start first game when page loads
startGame();
