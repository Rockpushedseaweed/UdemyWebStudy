/*Conditional Statement

if (     ) {        }
만약 (어떠면) {어떻게 해라}

if(1+1 === 2) {
    console.log("Math still works!")
}

true 시 {} 안 명령 실행.
false 시 {} 안 명령 실행하지 않음.


let random = Math.random();

if(random > 0.5) {
    console.log("Your number is more than 0.5!")
}

console.log(random);

*else if

const dayOfWeek = 'Monday';
if (dayOfWeek === 'Monday') {
    console.log("Fuck it's fucking Monday.");
}
else if () {}


*else {}
나머지의 상황, 마지막의 상황에 어떤 조건도 지정하지 않고 조건에 매치되는 것이 없으면 실행.


*Nesting(if 안에 if)

const password = prompt("please enter a new password");

if(password.length >= 6){
    if(password.indexOf(' ') === -1){
        console.log("Password making success.")
    }
}

*Truthy and Falsy values
모든 JS value 들은 고유한 truthyness나 falsyness를 갖고 있음.

Falsy values:
-false
-0
-""
-null
-undefined
-NaN

Everything else is truthy.