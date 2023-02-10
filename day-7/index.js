let fruites=["Water melon", "Pineapple", "apples"];
let veggies=["Carrots", "cellery", "onions"];
let groceries=fruites.concat(veggies);
console.log(groceries)

// let animals=["penguins", "pigeons", "sharks", "turtles", "fish", "lizzards", "tortus"];
// let birds=animals.slice(0,2);
// let fish=animals.slice(2,5);
// let reptiles=animals.slice(5)
// let zooAnimals=animals.slice()
// console.log(zooAnimals)

let fruit="orange";
let color=fruit;
fruit="waterMelon";
console.log(color)

let nums=[5,6,7,8];
let otherNums=nums
nums.push(9);
console.log(otherNums)

let nums2=[1,2,3]
let nums3=[1,2,3]
console.log(nums2===nums3)

const colors=[
    ["red", "blue", "green"],
    ["orange", "pink", "purple"],
    ["navy", "turqouise", "skyBlue"]
];
console.log(colors[0][1])
console.log(colors[2][2])

const fitbitData=[
    1200, 15000,2500
]
console.log(fitbitData)

const fitbitData2={
    "gregg steps":1200,
    caloriesBurnt:15000,
    weeklyCalories:2500,
}
console.log(fitbitData2["gregg steps"])
console.log(fitbitData2.caloriesBurnt)

const playerHighscore={};
playerHighscore["greg"]=600;
console.log(playerHighscore)

const student={
    firstName:"john",
    lastName:"doe",
    strenths:["math", "science"],
    examsScores:{
        midTerms:45,
        final:81
    }
}
console.log(student.examsScores.midTerms)
console.log((student.examsScores.midTerms+student.examsScores.final)/2)

console.log("hello")
console.log("hello")
console.log("hello")

for(let i=1; i<=10; i++){
 console.log("hello",i)
}

for(let i=5;  i<=10; i+=3){
    console.log("hello",i)
}

for(let num=1; num<=20; num++){
    console.log(`${num}X${num}=${num*num}`)
}

for(let i=200; i>=0; i-=25){
    console.log("hello", i)
}

// infinte loop do not run
// for(let i=0; i>=0; i++){
//     console.log("crashed",i)
// }

const animals=["bears", "lions", "tigers"];
for(let i=0; i<animals.length; i++){
    console.log(animals[i])
}

const businessClients=[
    {
        clientName:"bruce Wayne",
        finances:100000000
    },
    {
        clientName:"clark Kent",
        finances:1000
    },
    {
        clientName:"Oswalt copeelpot",
        finances:100000000
    },
    {
        clientName:"harley Quin",
        finances:1.0
    },
]

for (let i=0; i<businessClients.length; i++){
    console.log(`${businessClients[i].clientName} has ${businessClients[i].finances}`)
}

for(let client of businessClients){
    console.log(`${client.clientName} has ${client.finances}`)
}

const square=function(x){
    return x*x
}

const square2=(x) =>{
    return x*x
}

const some=function(x,y){
    return x+y 
}

const sum=(x,y)=>{
    return x+y
}

const isEven=(num)=>{
    return num % 2 ===0
}

const isEven2=num=>{
    return num%2===0
}

let snacks=["cheesets","pretzels","beer"];
const snackChecker=function(arr){
    for(let snack of snacks){
        if(snack==="beer"){
            return snack
        }
    }
}

snackChecker("nuts",...snacks)

const pets=["dog","cat","goldFfish"];
const dinos=["trex","stegadone"];

const animals2=[...pets,...dinos]