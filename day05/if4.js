
// 문제 1 : 과일 목록 관리
let fL = ['사과', '바나나']
let nf = prompt("과일 이름 입력 : ")

if(fL.indexOf(nf) != -1){
  console.log("이미 존재하는 과일입니다.")
}
else if(fL.indexOf(nf) == -1){
  fL.push(nf)
  console.log(`변경된 fL : ${fL}`)
}

// 문제 2. 성별에 따른 색상 지정

let ID = prompt("주민등록번호 입력(13자리) :")
if(ID.length-6 ){

}


// 문제 3. 구매 금액에 따른 할인율 적용

let tm = Number(prompt("총 구매 금액 :"))
if(tm >=50000){
  tm*0.9 
  console.log(`최종 금액 : ${tm*0.9}`)
}
else if(tm >=30000){
  tm*0.95 
  console.log(`최종금액 : ${tm*0.95}`)
}
else if(tm >=10000){
  tm*0.99 
  console.log(`최종 금액 : ${tm*0.99}`)
}
else{ console.log(`최종 금액 : ${tm}`)}



// 문제 4. 월에 따른 계절 판별

let month = prompt("월(1~12) 입력 : ")

if(month >= 3 && month <=5){
  console.log("봄")
}
else if(month >= 6 && month <=8) {
  console.log("여름")
}
else if(month >= 9 && month <=11) {
  console.log("가을")
}
else if(month == 12 || month <=2) {
  console.log("겨울")
}
else{console.log(`잘못된 월입니다. 다시 입력하세요`)}


// 문제 5. 세 수 중 가장 큰 수 찾기

let a = Number(prompt("첫 번째 수 입력 : "))
let b = Number(prompt("두 번째 수 입력 : "))
let c = Number(prompt("세 번째 수 입력 : "))

if(a>= b && a>= c){
  console.log(`가장 큰 수 (첫번째 수)${a}`)
}
else if(b>= a && b>= c){
  console.log(`가장 큰 수는 (두번째 수) ${b}`)
}
else if(c>= a && c>= b){
  console.log(`가장 큰 수 (세번째 수) ${c}`)
}

 // 문제 6. 윤년 판별기 
 let y = Number(prompt(" 해당 년도 : "))

if (typeof y == "number")
  { console.log(`숫자만 입력해라`)}

else if(y%400 ==0){
  console.log(`${y}년은 윤년입니다.`)
 }
 else if(y%4 == 0 && y%100 !=0){
  console.log(`${y}년은 윤년입니다.`)
 }
 else 
  console.log(`${y}년은 평년입니다.`)
   
 // 문제 7. 세 수 오름차순 정렬
 
 let q = Number(prompt("첫번째 수 : "))
 let w = Number(prompt("두번째 수 : "))
 let e = Number(prompt("세번째 수 : "))
 let qwe = [q,w,e]
  qwe.Maxnumber

 if(q < w < e){
  console.log(`${q} ${w} ${e}`)
 }
 else if(q < e < w){
  console.log(`${q} ${e} ${w}`)
 }
 else if(w < q < e){
  console.log(`${w} ${q} ${e}`)
 }
 else if(w < e < q){
  console.log(`${w} ${e} ${q}`)
 }
 else if(e < q < w){
  console.log(`${e} ${q} ${w}`)
 }
 else if(e < w < q){
  console.log(`${e} ${w} ${q}`)
 }

 
// 문제 8. 가위바위보 게임
let rsp = ["가위", "바위","보"]
let p1 = prompt(" 플레이어 1 가위바위보 선택 : ")
let p2 = prompt(" 플레이어 2 가위바위보 선택 : ")

a = rsp.indexOf(p1);
b = rsp.indexOf(p2);

if(a == -1 || b == -1){
  console.log(`다시 입력해주세요`)
}
else if(a == b){
  console.log(`무승부`)
}
else if ( a == 0 && b == 2){
  console.log(`플레이어 1 승리`)
}
else if ( a == 1 && b == 0){
  console.log(`플레이어 1 승리`)
}
else if ( a == 2 && b == 1){
  console.log(`플레이어 1 승리`)
}
else{
  console.log(`플레이어 2 승리`)
}


// 문제 9. 주차 차량 위치 검색

let carArray = ['250어7142','142가415', '164주5994']
let locationArray = ['A1', 'B3', 'C2'] 
let usercar = prompt("사용자의 차번호")


if(carArray.indexOf(usercar) == -1){
  console.log(`차량이 존재하지 않습니다.`)
} 
else {
 console.log(locationArray[(carArray.indexOf(usercar))])
}

//문제 10. 수강 신청 목록에서 과목 제외하기
let cL = ['수학', '영어','과학','국어']
let en = prompt(`제거할 과목 : `)
let ch = cL.indexOf(en)


if(ch==-1){
  console.log(`해당 과목은 신청 목록에 없습니다.`)
}
else{
  console.log(`신청 가능한 과목 : ${cL.splice(ch,1)}`)
  console.log(cL)
}