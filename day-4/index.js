const age="5"+"4";
console.log(age)

const word='pecan pie'[7]
console.log(word)

let userImput='     greg@emal.com     ';
let cleanedImput= userImput.trim().toUpperCase()
console.log(cleanedImput)

let park="yellow stone"
let index=park.indexOf('!')
console.log(index)

const step1=Math.random()
const step2=step1*10;
const step3=Math.floor(step2)
const step4=step3+1
console.log (step4)
const randomNum=Math.floor(Math.random()*10)+1
console.log(randomNum)

if(1!==1){
    console.log(true)
}else{
    console.log(false)
}

let myAge=69;
if(myAge<18){
    console.log("you can come in but you can't drink")
}else if(myAge===21){
    console.log('you can come in and drink, happy birthday')
}else if(myAge>=50 && myAge<65){
    console.log("senior citizen discount")
}else{
    console.log("go home your to old")
}