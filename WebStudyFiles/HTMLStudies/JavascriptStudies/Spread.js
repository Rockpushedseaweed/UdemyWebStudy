Spread
배열 안의 요소들을 ...구문을 통해 하나의 인수로서 나눠(spread)해주는 것.

const nums = [13, 23, 3,4, 5,34 ,23545, 23451, 3322]
Math.max(nums)
 -> NaN


 Math.max(...nums)
 -> 23545



 console.log(..."Hello")
-> H e l l o

새로운 객체도 spread를 통해 만들 수 있음.

const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae'}

const catDog = { ... feline, ...canine}
=> {legs: 4, family: 'Caninae', isFurry: true}

두가지 오브젝트가 합쳐졌을 때 property가 중복되면 마지막의 내용이 업데이트 됨.