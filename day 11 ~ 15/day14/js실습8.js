let 항목목록 =[
  {코드 : 1,"날짜" : "2026-01-26", "항목" : "점심식사", "금액" : 9000},
  {코드 : 2,"날짜" : "2026-01-27", "항목" : "교통비",   "금액" : 5000},
];
function func11(){

let dateDOM = document.querySelector("#datepush");
let date = dateDOM.value;

let thingDOM = document.querySelector("#thingpush");
let thing = thingDOM.value;

let moneyDOM = document.querySelector("#moneypush");
let money = moneyDOM.value;


let code =항목목록[항목목록.length-1].코드+1;
let 등록 = {코드 :code, "날짜" : date, "항목" : thing , "금액" : money};
항목목록.push(등록);
console.log(항목목록);
alert("등록완료");

thingDOM.value=``;
moneyDOM.value=``;

출력함수();
};



// [1] 메모리 설계
// 표 =배열, 행 = 레코드 = 객체 1개, 표제목 = 속성명 , 셀[한칸] = 데이터/속성값 


// [2] 기능 설계
/* 
(1) 화면에 보이는 이벤트 행위
(2) 화면에 보이지 않는 이벤트/행위 찾기

1. 등록 처리하는 기능 필요
2. 표에 출력하는 기능 필요
*/

function 출력함수(){
  console.log("출력함수 exe")

  // 1.어디서
let 테이블본문 = document.querySelector(".테이블본문") 

  // 2.무엇을
  let html=''
  for(index =0; index<=항목목록.length-1; index++){
    let 객체 = 항목목록[index]
    html += `<tr>
             <td>${객체.날짜}</td>
             <td>${객체.항목}</td>
             <td>${객체.금액}</td>
            </tr>`
  }
    // 3. 출력
    테이블본문.innerHTML = html;
}

