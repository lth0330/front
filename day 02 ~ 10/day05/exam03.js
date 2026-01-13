
// 문제 2. 두수 중 더 큰 수 찾기 

let a = Number(prompt("a 값 : "))
let b = Number(prompt("b 갑 : "))

if(a > b){
  console.log(`더 큰 값${a}`)
}
else{`더 큰 값${b}`}

// 문제 3. 로그인 시스템 

let ID = prompt("ID 입력 : ")
let PW = prompt("`비밀번호 입력 ")

if(ID == "admin" && PW == "1234"){
  console.log(`로그인 성공`)
}
else{ console.log(`로그인 실패`)}

// 문제 4. 비밀번호 보안 등급 확인

let len = prompt("비밀번호 입력")
if(len.length < 8){123456
  console.log(`보안등급 약함(8자 이상으로 설정해주세요)`)
}
else if(len.length < 12){
  console.log(`보안등급 보통`)
}
else{
  console.log(`보안등급 강함`)
}


// 문제 5. 좌석 예약 시스템

let seatLise=['O', 'X', 'O']
let sec = Number(prompt("선택할 숫자(0~2)"))
let a = seatLise[sec]

if(a == 'O'){
  console.log(`예약완료`)
}else if ( a == 'X'){
  console.log(" 예약 불가")
}
else{console.log(`다시입력하시오`)}

 // 문제 10. 음료 자판기
let dN = ['콜라', '사이다', '커피']
let dP = [1000,1000,1500]
let user = prompt("입력(0~2) :")

if(user <= 2 && user >=0) {
  console.log(`선택한 음료와 가격은 ${dN[user]}와 ${dP[user]}입니다.`)
}
else{
  console.log("목록에 없는 상품입니다.")
}


