var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto"; //holds String data type
var enemyHealth = 50;
var enemyAttack = 12; //holds Number data type

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable.
        enemyHealth = enemyHealth - playerAttack;
  
        // Log a resulting message to the console so we know that it worked.
        console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // check enemy's health
        if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        } 
        else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
    
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
    
        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } 
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
    else if (promptFight === "skip" || promptFight === "SKIP") {

        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

       // if yes selecting "ok" (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
        // if no selecting "cancel" (false), ask question again by running fight() again
        else {
            fight();
        }
    }
    else {
        window.alert("You need to choose a valid option. Try again!");
        
        fight();
    }
};

fight();

/* 
1. We let the player know the fight has begun.

2. We have our robot attack the enemy-robot by subtracting our robot's playerAttack value by the enemy's enemyHealth value, resulting in our enemy's new enemyHealth value.

3. We then check to see if that last attack destroyed our robot and got its health down to zero or below by using a conditional statement.
- If enemyHealth is zero or below, the enemy-robot has lost.
- Else enemyhealth is above 0 and the enemy-robot can still fight.

4. We have the enemy-robot attack the player. (Later in the project, we'll make sure that dead robots can't fight!)
*/



















// window.alert("This is an alert! JavaScript is running!");
// when you open browser, this alert will pop up, and can't do anything until you acknowledge the dialog window and click the button

// var playerName = window.prompt("What is your robot's name?");

// // What is this?
// console.log(playerName);

// console.log("This logs a string, good for leaving yourself a message");
// // this will do math and log 20
// console.log(10 + 10);
// // what is this?
// console.log("Our robot's name is " + playerName);

// // // Note the lack of quotation marks around playerName
// // window.alert(playerName);
// // // this alert will contain the playerName entered

// // this creates a function named "fight"
// function fight() {
//     window.alert("The fight has begun!");
// }

// fight();
// fight end

