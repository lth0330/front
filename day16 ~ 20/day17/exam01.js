/*
  [인터벌 : interval] : 간격 /주기 라는 뜻
      1. 시간적인 간격에 따라 특정 코드/함수 실행
      2. 사용법
          setInterval(함수명,밀리초);
          - 함수명 : 함수명만 작성한, ()생략한다.
          - 밀리초 : 1/1000초
*/

//[1] 
let value = 0; 
function 증가함수(){
  value = value + 1; //전역변수 1증가
  const box1 = document.querySelector('#box1');
  box1.innerHTML = value; 
} 
//특정한 시간 / 간격 마다 함수 실행
setInterval(증가함수, 1000); // 1초마다 '증가함수라는 함수가 자동실행'
// 주의할점 : 증가함수: 함수 그자체   vs   증가함수() : 함수실행


// [2]
function 시계함수(){
  let today = new Date();// new date : 현재 시스템의 날짜/ 시간 반환 함수
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  let time = `${hour}시 ${minute}분 ${second < 10 ? '0'+second : second}초`
  const box2 =document.querySelector('#box2')
  box2.innerHTML = time;
}

setInterval(시계함수,1000);

// [3]
let time = 0; // 현재 타이머의 시간(초)
let timerId;  // interval 객체를 저장하는 변수
function 타이머시작(){
  // interval 실행 후 반환된 객체를 timerId에 대입 / 왜 ? : 나중에 제어(종료)하기 위해서
  timerId = setInterval(시간함수,1000);
  
}
function 타이머종료(){
  clearInterval(timerId); // clearInterval(종료할 interval객체 )

}