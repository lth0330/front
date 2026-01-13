
// 객체란? 서로 다른 자료/값들을 하나의 자료로 구성
// 1.내가만든함수 function, 2. 남이 만든 함수 console.log() alert(), prompt() 등
// 남이 만든 객체 장점 : <라이브러리> 미리만들어진 함수/기능이 많다.
// [1] document : js 회사에서 HTML 조작할때 사용
console.log(document); //현재 js가 포합하는 HTML 그 차제 <객체 표현>

// [2] .wirte(""): \
// 매체 변수 : html 출력할문자열
document.write("<h3> 내장객체 함수실행 </h3>");

// [3] document.querySelector("css 선택자"): js에서 특정한 마크업 객체 반환함수
// 매개변수 : CSS 선택자, 반환값 : 선택된마크업객체 또는 (없으면)undefined
let div = document.querySelector("div"); //문서(HTML)에서 div 마크업 객체 가져오기
console.log(div);

let box2 = document.querySelector(".box2"); // 함수 결과가 box2 변수에 저장된다
console.log(box2);

let box3 = document.querySelector("#box3")

//[4] document.querySelectorAll("CSS서택자") : js에서 특정한 마크업(들 객체)
let div2 = document.querySelectorAll("div")
console.log(div2)
// [5] .innerHTML : 선택된 DOM객체내 마크업 사이에 텍스트 호출
let html1 = document.querySelector("#box3").innerHTML
console.log(html1); //box3

document.querySelector("#box3").innerHTML ="박스3번"  // 마크업 사이에 텍스트 <수정>

// [6] .value : 선택된 DOM객체내 마크업 value 속성값 호출
// 버튼 클릭시 입력받은 값 가져오는 함수 
function func1() { // 매개변수 X
  let value = document.querySelector(".myInput").value;
  console.log(value + " 입력했군요.")
} // 반환값x


function func2() {  // 주의할점 : 입력상자(input, select/textarea 등)
document.querySelector(".title").innerHTML = "js에서 넣어준 텍스트"
} // 


function func3() {  // 한명령어(한줄)에 .(토드/접근산자)가 많아지면 중간에 변수활용
let title2 = document.querySelector(".title2")
  title2.style = "color : red";
  title2.style.backgroundCorlor ="blue";
  // 카멜표기법이란 ? 낙타의 등모양처럼 , mycar -> myCar, background -> backGround
}

//js에서 실행하는 방법 :let 결과 =  함수명(인자값);
//html에서 실행하는 방법 : <마크업명 이벤트속성명 = "힘수명()"/>

