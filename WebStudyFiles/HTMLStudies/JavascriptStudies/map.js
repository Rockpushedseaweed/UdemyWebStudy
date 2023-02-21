map

원래 배열에 있던 데이터를 가져와서 Map을 통해 새로운 복제 배열에 넣을 떄 직접 복사본을 만듬.
데이터 일부만 가져온다거나, 두배를 한다거나 할 때 필요.
const numbers = [1,2,3,4,5,6,7,8,9,10];

const doubles = numbers.map(function(num){
    return num*2;
})