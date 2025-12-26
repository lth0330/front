/*
console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);
console.log(parseInt(10/3)) // 몫 : 3
console.log(10 % 3); // 나머지 1

// 1번문제
let 국어 = prompt("국어: ");
let 영어 = prompt("영어 :")
let 수학 = prompt("수학 :")
let 총점 = Number(국어)+ Number(영어)+ Number(수학)
let 평균 = 총점/3
console.log(평균)


// 2번문제
let 반지름 = Number(prompt('반지름 : '))
let 원넓이 = 반지름*반지름*3.14
console.log(`원넓이 : ${원넓이}`)


// 3번문제
let f1 = Number(prompt('실수 1 :'))
let f2 = Number(prompt('실수 2 :'))
let ratio = (f1/f2)*100 // 1:100% , 0.1 = 10% 0.01 = 1%
console.log(`result ${ratio}%`)

// 비교연산자 : == >초과, <미만, >=이상, ==같다, !=같지않다, ===값과 타입이같다, !==값과 타입이 같지않다
// 비교 결과는 true 또는 flase

// 논리연산자 : && 이면서(and) ||이거나(or)
// && 모두 참이여야 참, || 하나만 참이여도 참
// ! : 부정 반대 not 조건 :  true -> false, false -> true


// 4번문제 
let 홀짝 = Number(prompt("숫자 입력 : "))
let 홀짝판단 = 홀짝%2 == 0
console.log(`홀짝판단 : ${홀짝판단}`)


// 5번 문제
let 배수판단 = Number(prompt("정수 입력 : "))
let 배수7 = 배수판단%7==0
console.log(`7의 배수인가 : ${배수7}`)

// 6번 문제
let ID = prompt("아이디 : ")
let PW = prompt("비밀번호 : ")
let 결과 = ID == "admin" && PW == "1234"
console.log(`로그인 여부 : ${결과}`)


// 7번 문제
let int7 =Number(prompt("입력한 정수값 :"))
let result7 = int7%2==1 && int7%7 == 0
console.log(`result : ${result7}`)
*/

// 8번 문제
let num1 = Number(prompt("1차 점수 :"))
let num2 = Number(prompt("2차 점수 :"))
let hap = num1+num2 >= 150 
document.write(hap); 

document.querySelector("h3").innerHTML = hap
// 9번 문제 






