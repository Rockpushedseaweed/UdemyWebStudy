// 'this' Method: Use the keyword this to access other properties on the same object.

// Method에 있는 객체(object)를 가리킬 때 this 키워드를 사용함.

// ex)
// const cat = { 
//     name: 'Blue Steele',
//     color: 'grey',
//     breed: 'scottish fold',
//     meow(){
//         console.log("Meow Moew Moew")
//         }
// }
// 오브젝트 내부에서 키값을 불러오고 싶을 때 
// console.log(`${this.breed} says Meow Moew Moew`)



// const cat = { 
//     name: 'Blue Steele',
//     color: 'grey',
//     breed: 'scottish fold',
//     meow(){
//         console.log(`${this.breed} says Meow Moew Moew`)
//     }
// }

// const meow2 = cat.meow;

// 이 상황에서 meow2() 하면 -> 'says Meow Moew Moew'라고 나옴.
// 이는 호출 context의 차이 때문. method에 cat를 쓰고 함수를 호출.

// 즉, cat.meow()일 때는 this.가 cat을 가리키지만,
// meow2()일 때는 사실 meow2앞쪽에 최상위 객체인 Window.meow2()가 있기 때문에 this. 는 Window.를 가르킴.

