

alert(" 문제 1 : 삼각형 넓이 계산")

let 높이 = prompt("높이 : ")
let 밑변 = prompt("밑변의 길이 :")
let 삼각형넓이 = Number(높이)*Number(밑변)/2;
console.log("높이:",높이)
console.log("밑변의 길이 : ",밑변)
console.log(`삼각형넓이 = ${삼각형넓이}`)
console.log("--------------------------------")

alert("문제 2 : 섭씨를 화씨로 변환 ")
let 섭씨 = prompt("섭씨 : ")
console.log(`입력한 섭씨 :${섭씨}`)
let 화씨변환 = (Number(섭씨)*9/5)+32
console.log(`화씨변환  :${화씨변환}`)

console.log("--------------------------------")
alert("문제 3 : 나이 계산기")
let 출생년도 = prompt("출생년도 : ")
console.log(`출생년도 :${출생년도}`)
let 나이 = 2025 - Number(출생년도)
console.log(`현재 나이 :${나이}`)

console.log("--------------------------------")
alert("문제4 : BMI지수 계산")
let 몸무게 = prompt("몸무게(kg) : ")
let 키 = prompt("키(cm) : ")
console.log("키와 몸무게", 키,몸무게)
let 키m = 키/100
let BMI = Number(몸무게)/Number(키m)*Numbeadr(키m)
console.log("BMI 지수 : ",BMI)

console.log("--------------------------------")
let ID = prompt(" ID 입력 : ")
let EM = prompt(" 이메일 입력 : ")
let result5 = ID == "admin" || EM == "admin@TextDecoderStream.com"

result5 = result5 == true ? "관리자" : "일반 사용자"
console.log(`사용자의 등급 : ${result5}`)


console.log("--------------------------------")
let score = Number(prompt("점수 입력 : "))
if ( score >=90){
  score = "A"}
  else if (score>=80){ 
    score = "B"}
      else { score = "C"}
  
  document.querySelector("h2").innerHTML = score

  console.log("--------------------------------")
  let old = Number(prompt("나이 : "))
    result8 = old <=29 && old >= 20
    result88 = result8 == true ? "이벤트 대상입니다" : "이벤트 대상이 아닙니다."; 
    console.log(`결과 : ${result88}`)

 console.log("--------------------------------")
 let likeCount = 3;
 likeCount++;
 console.log(`좋아요 [${likeCount}]`);

 console.log("--------------------------------")
let todeList = ['장보기', '과제하기']
let newwork = prompt(" 새롭게 할일 : ")
todeList.push(newwork)
console.log (`새로운 배열 : ${todeList}`)


 console.log("--------------------------------")
 let waitingList = ['김민준','이서연', '박도윤', '최지우']
 let lastname = waitingList.length-1
 console.log(`마지막 대기자는 ${waitingList[lastname]}`)



