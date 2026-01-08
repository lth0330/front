/*
// 문제 1 : prompt로 제품 정보 객체 만들기
const 제품명 = prompt("제품명 입력 : ");
const 가격 = prompt("가격 입력 :");
const 제조사 = prompt("제조사 입력 : ");

const product ={제품 : 제품명, price : 가격, 제조 : 제조사}
console.log(product)
*/
// 문제 2 : prompt로 회원 가입 및 아이디 중복 확인 기능 구현

const ID = prompt("아이디 입력 : ");
const PW = prompt("비밀번호 입력 :");
const name = prompt("이름 입력 : ");

const member={아이디 :ID, 비밀번호 : PW, 이름 : name}
if(Object.member(ID)==1){
  console.log(`존재하는 아이디입니다.`)
}
else{member}