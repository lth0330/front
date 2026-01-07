/*
// 문제 1 : 자기소개 객체 만들기
let person1= { name : "이태형", age : '27', city : '서울'}
console.log(person1);

// 문제 2 : 객체의 값(value) 출력하기
const book= {title :"book1", autor: "이태형", page : '777'};

const value2 = Object.values(book);

for(let i = 0; i<=value2.length-1; i++){
  console.log(value2[i])
}

// 문제 3 : 객체 속성 추가 및 삭제하기
const person3 = { name: "이태형", age :'27'};
delete person3.age;
person3.email = "xm30003@naver.com"

console.log(person3)


// 문제 4 : 객체 속성값 계산하기
const product4 = {name:"노트북", pirce : "180",stock:" 3"};


console.log('pirce' in product4);
console.log('stock' in product4);

//문제 5 : 대괄호 표기법 사용하지
const user = {name:'김코딩', 'job-title' : '개발자'};

console.log(user["job-title"]);

// 문제 6 : 중첩된 객체 다루기
const student = { name : '남학생', age :27, address : {city:'seoul',zipcode :'12345'}}
console.log(student.address.city);

// 문제 7 : 객체에 특정 속성이 있는지 확인하기(in 연산자)
const character = { name : '마법사',hp:100, MP : 200};

console.log('level' in character)

// 문제 8 : key(), values()
const country = {name : '대한민국', capital:'서울', population :'51651'}
console.log(Object.keys(country))
console.log(Object.values(country))

// 문제 9 : 객체와 조건문 활용하기
const inventory = { apple : 15, banana : 5, orange : 20, grape : 8};
const key = Object.keys(inventory);

for( int index = 0; index <=key.length-1;index++){
  if(inventory[key[index]] < 10)
  {
    console.log(key[index])
  }
}

// 문제 10 : 객체 배열 순회하기
const students = [ { name: '김철수', major: '컴퓨터공학' }, { name: '이영희', major: '경영학' }, { name: '박지성', major: '체육교육' } ];
for(let index = 0; index <= students.length-1;index++  ){
  const student = students[index];
  console.log(`${student.name} : ${student.major}`)
}

*/
