//global variables
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"]; //holds String data type
var enemyHealth = 50;
var enemyAttack = 12; //holds Number data type

console.log(enemyNames);
console.log(enemyNames.length);

// fight function (now with parameter for enemy's name)
var fight = function(enemyName) { //enemyName is just a parameter

    // repeat and execute as long as the enemy-robot is alive 
    while(playerHealth > 0 && enemyHealth > 0) { //add playerHealth so break; can work
        // ask player if they'd like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")
        
        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes selecting "ok" (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // check enemy's health
        if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        break; //exit fight loop
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
            break; //to exit current loop
        } 
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    };
};

// function to start a new game
var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    //debugger;
    // fight each enemy-robot by looping over them and fighting them one at a time
    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        
            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];
        
            // reset enemyHealth before starting new fight
            enemyHealth = 20;
        
            // use debugger to pause script from running and check what's going on at that moment in the code
            // debugger;
        
            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        } 
    }

    // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
};

// start the game when the page loads
startGame();
// note: w/o this call, you wouldn't go beyond naming your robot

// note: startGame(); (now endGame();) was called within the function itself bc after the player has died, and after you break out of the function loop, you run through the startGame() function again but this time go to "else" and have the alert Game Over! pop up

// function to end the entire game
function endGame() { // changed from var endGame = function() {...} bc calling endGame(); higher up!!
    // if player is still alive, player wins!
    if (playerHealth > 0) {
      window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } 
    else {
      window.alert("You've lost your robot in battle.");
    }

    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
    // restart the game
    startGame();
    } 
    else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};
