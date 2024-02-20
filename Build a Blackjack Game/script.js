// if player gets sum of cards > 21 he's out of the game
// if player gets sum of cards = 21 he got a blackjack
// if player gets sum of cards < 21 he can draw another card

let firstcard = 10;
let secondcard = 11;
let sum = firstcard + secondcard;

let hasBlackJack = false;
let isAlive = true;

if(sum <= 20){
    console.log("Would you like to draw another card? 🙂");
} else if(sum === 21){
    console.log("Wohoo! You've got a BlackJack!! 🥳");
    hasBlackJack = true;
} else{
    console.log("You're out of the game 😭");
    isAlive = false;
}