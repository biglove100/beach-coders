let character = "wizard";
let treasure = 'gems';

let sentence = "the " + character + " found " + treasure;
console.log(sentence)
let sentence2=`the ${character} found ${treasure}`;
console.log(sentence2)

let item=`carrots`;
let price= 3.50;
let quantity= 12;
let receipt=` item purchased ${quantity} ${item}, your total price is: $${price* quantity}`;
console.log(receipt)

const currentFunds= 200;
const mimFunds= 600;
const casinoDealer= `you currently have ${currentFunds} you can play when you have ${mimFunds-currentFunds}`;
console.log(casinoDealer);

const favNum= 17;
const newFavNum= 8;
console.log(favNum%newFavNum===0);

let loggedIn=null;
let payOut;
let score= 10;
score= 5;
score=score+5;
score+=3;
score++;
score-=3;
score--;
console.log (score)