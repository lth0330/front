
//[1] 조건문 조건이 true 이면 코드 실행
// vs 삼항연산자 :
// 1.다양한 논리 할때 가독성이 떨어진다.
// 2. true와 false (항) 함수호출 또는 변수 선언이 불가능하다
10 > 5 ? console.log("참") : console.log("거짓");

if(10>3){
  console.log("참");
}
if(10>20){
  console.log("참2"); // 실행안됨
}


//[2] 명령어 문장(;)이 2개 이상이면 {} 중괄호 묶기
if(10>5){
  console.log("참1");
  console.log("참2");
}

// [4] 조건이 다수일때  (여러 조건중에 하나의 참만을 가지게 할때) 
// if if if 은 다수 참이나 다수 거짓이 나올 수 있다.
if(10>20){
   console.log("출력 안됨");
}
else if (10>15){
  console.log("이것도 출력 안됨");
}
else{ console.log("이것만 출력됨")}