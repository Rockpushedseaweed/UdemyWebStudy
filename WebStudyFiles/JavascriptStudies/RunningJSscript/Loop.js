// Loop

// /*

// *For 

// for (현재값; 조건식; 참이면--해라) 
// for(
//     [initialExpression];
//     [condition];
//     [incrementExpression]
// ){}

// for(let i = 1; i<=10; i++){
//     console.log(i)
// }

// 루프를 쓸 때  무한으로 가게끔 하지 말어라.

// *Nested Loops

// const seatingChart =[
//     ['1','2','3'],
//     ['4','5','6'],
//     ['7','8','9']
// ]

// for(let j = 0; j< seatingChart[0].length; j++){
//         console.log(seatingChart[0][j]);
//     }
//     for(let k = 0; k< seatingChart[1].length; k++){
//             console.log(seatingChart[1][k]);
//         }
//     for(let l = 0; l< seatingChart[2].length; l++){
//             console.log(seatingChart[2][l]);
//         }

// for (let i = 0; i < seatingChart.length; i++){
//     const row = seatingChart[i];
//     console.log(`Row number is ${i+1}`);
//     for (let j = 0; j < row.length; j++){
//         console.log(row[j]);
//     }
// }

// *While loops
// 반복 수를 정해놓지 않을 경우 사용.


// let num = 0;
// while(num<10){
//     console.log(num);
//     num++;
// }

let input = prompt("Hey, say something!");

while(true){
    input = prompt(input);
    if(input === "fuck"){
        break; //break 를 통해 어느 정도가 됐을 때 멈출 수 있음.
    }
}
input = prompt("죄송합니다");