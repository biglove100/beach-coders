let symbol="shamrock";
if(symbol==="shamrock"){
    console.log("lucky")
}else{
    console.log("badLuck")
}

symbol==="shamrock" ? console.log("lucky"):console.log("badluck");

let userStatus="offline";
let color;
if(userStatus==="offline"){
    color="red"
}else{
    color="green"
}

userStatus==="offline" ? color="red":color="green"
console.log (color)

let student=[]

let shopping=["cheeseits", "pretzels", "beer"]

let myStuff=["shamrock", 7, "pizza", true, null]

let colors=["red", "orange", "yellow"]
console.log(colors[0])

console.log(colors[colors.length-1])

shopping[0]="milk"
console.log(shopping)
shopping.push("water")
shopping.pop()
console.log(shopping)

shopping.unshift("steak")   //=adding a value to the front of an array//
shopping.shift()    //=removing from start of an array//
console.log(shopping)