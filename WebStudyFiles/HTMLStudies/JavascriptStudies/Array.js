/*Array
-배열은 값의 순서가 있는 집합이다.

let colors = ['red', 'orange', 'yellow'];


.push : 배열 끝에 항목 추가.
.pop : 배열의 마지막 항목을 지움.

.shift : 배열의 처음을 제거.
.unshift : 배열의 처음에 추가.

기타 Array Method
.concat : A배열 + B배열 을 통해 합쳐진 C배열을 만들어 줌.
.includes : 배열 안에 해당 항목이 있는지 Boolean 값으로 알려줌.
.indexOf : 배열 안에서 몇번째로 위치하는지 알려줌.
.reverse : 배열의 순서를 뒤집음.
.slice(start, end) : 배열의 일부를 복사.
.splice(start, 몇개 없앨지, '무엇을 넣을지'): 어디부터 몇개를 없애고, 옵션으로 무엇을 다시 채워넣을건지 정하는 매소드.

function returnDay(num){
    if(num == 1){
        return "Monday"
    }
  else if(num == 2)
  {
        return "Tuesday"
    }
  else if(num == 3){
        return "Wednesday"
    }
  else if(num == 4){
        return "Thursday"
    }
  else if(num == 5){
        return "Friday"
    }
  else if(num == 6){
        return "Saterday"
    }
  else if(num == 7){
        return "Sunday"
    }
  else return null}

returnDay(7)