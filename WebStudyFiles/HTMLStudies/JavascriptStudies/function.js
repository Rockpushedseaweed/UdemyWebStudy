// Fucntion 함수

// **정의할 때 
// function 함수이름(){
//     액션
// }

// **실행할 때
// 함수이름(); //한번만 실행.
// 함수이름(); //다시 실행.

function singSong(){
    console.log("Do")
    console.log("Re")
    console.log("MI")
}

*인수: 함수 결과에 영향을 주는 input들

// function 함수이름(매개변수) {
//     액션
// }

function greet(firstName){
    console.log(`first name is: ${firstName}`)
}

**여러가지 매개변수
function repeat(str, numTimes){
    let result = '';
    for(let i = 0; i< numTimes; i++){
        result += str;
    }
    console.log(result);
}
function