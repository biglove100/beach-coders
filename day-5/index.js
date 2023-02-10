// let password="superspacedude";
// if(password.length>=6){
//     if(password.indexOf(" ")!== -1){
//         console.log("no spaces in password")
//     } else{
//         console.log("password excepted")
//     }
// } else{
//     console.log("password needs to be longer");
// }

let misteryNum=1000;

if(misteryNum){
    console.log("truthy");
} else{
    console.log("falsy");
}

console.log(true && false)
console.log(1>0 && 3>6);

console.log(1<=15 && "abc"==="abc")
console.log(7 !== 7)
console.log(1>=15 || 7<15)

let password="superspacedude";
if(password.length>=6 && password.indexOf(" ") === -1){
    console.log("password exepted");
}else{
    console.log("invalid")
}

let num=6;
if(num>=1 && num<=10){
    console.log("number is between 1 and 10");
}else{
    console.log('please guess a number between 1 and 10')
}

let age=16;
if(age<6 || age>= 65){
    console.log("you get in for free")
}else{
    console.log("Child price is $5 adult price s $10")
}

let snack="beef jerky";
if(snack==="cheese its"|| snack==="fat cells"||snack==="beef jerky"){
    console.log("good chooice");
}else{
    console.log("lets pick something else");
}

let wine="roase";
if(wine !== "roase" && wine !=="red"){
    console.log("not in stock")
}
if(wine === "roase"|| wine ==="red"){
    console.log("order exepted");
}else{
    console.log("not in stock")
}