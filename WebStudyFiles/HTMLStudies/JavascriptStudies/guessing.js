// let input = parseInt(prompt("Guess ME!"));
// const answer = 14;
// while(input != answer){
//    if(input < answer){
//     input = prompt("low. Try more than that.");
//    }
//    else if(input > answer){
//     input = prompt("It's too much. Try lower number.");
//    }
//    else{
//     input = prompt("Type Only number.");
//    }
// }
// if(input === answer){
//     console.log("congraturation, You won!");
//     console.log(`You have got answer in ${input.count}guesses.`);
// }

let maximum = parseInt(prompt("Enter your maximum number"));
const targetNum = Math.floor(Math.random()* maximum)+1;
console.log(targetNum);

while(!maximum) {
    maximum = parseInt(prompt("Enter a valid number."));
}

let guess = parseInt(prompt("Guess me!"));
let attempts = 1;

while(parseInt(guess) !== targetNum){
    if(guess === 'q')
        break;
        
    attempts++;
   if(guess < targetNum){
    guess = prompt("low. Try more than that.");
   }
   else if(guess > targetNum){
    guess = prompt("It's too much. Try lower number.");
   }
}
if(guess === 'q'){
    console.log("You give up.");
}

console.log("You Won!");
console.log(`It took you ${attempts} guesses.`);
