// [1] "안녕하세요" 5번 출력하세요.
console.log(`안녕하세요`);
console.log(`안녕하세요`);
console.log(`안녕하세요`);
console.log(`안녕하세요`);
console.log(`안녕하세요`);

// [2] 반복되는 코드, 반복되지 않는 코드
console.log(`1`);
console.log(`2`);
console.log(`3`);
console.log(`4`);
console.log(`5`);
// 문제점 : 반복수가 늘어나면 코드도 같이 늘어난다. <비효율적>
//1. 반복되는 코드 : console.log()
//2. 반복되지 않는 코드 : 1 2 3 4 5
//3. 반복되지 않는 코드의 패턴 : ++1

// 초기값 : 1, 조건문 : (반복이) 5까지 , 증감식 1씩, 반복코드 : console.log
// 1. 초기값 : let i = 1;  * i(Iterator)반복자
// 2. 조건문 : i <= 5;     * 반복자가 반복실행하는 조건식
// 3. 증감식 : i++;        * i++ ,  i=i+1 , i+=1  모두 동일
// 4. 실행문 : {코드; } 
for(let 반복변수 = 1; 반복변수 <=5; 반복변수 = 반복변수 + 1);{
  console.log(반복변수);
}

// [3] 1부터 5까지 총합계를 구하시오
let 총합계 = 0 // 총합계 저장하는 변수
총합계 += 1 ;  // 총합계 = 총합계 + 1
총합계 += 2 ;
총합계 += 3 ;
총합계 += 4 ;
총합계 += 5 ;

// 1. 반복되지않는 코드 : (1) let 총합계 = 0; , (2) 1 2 3 4 5
// 2. 반복되는 코드 : (3) 총합계 +=
// 3. 반복되지않는 코드 (증감) 패턴 ? (1) 없다. (2) 1부터 5까지 1씩 증가.
// 초기값 : let 더할값 = 1    // 조건문 : 더할값 <=5; //증감식 : 더할값 ++; // 실핼문 : 총합계+=
let sum = 0;
for(let i = 1 ; i <5; i++){
  sum+=i;
}


//[5] 배열과 반복문 관계 : 배열내 저장된 자료들은 인덱스가 존재한다. *
// 반복문 초기값와 배열인덱스 = 0 
// 반복문 조건문과 배열명.lenght
let ary=[];
let a = prompt(" 값 : ") ; ary.push(a);
let b = prompt(" 값 : ") ; ary.push(b);
let c = prompt(" 값 : ") ; ary.push(c);

// vs
for(let count = 0; count<3; count++){
  let d = prompt("값 : ");
  ary.push(d);
}

//출력
for( let index = 0; index <= ary.length - 1; index ++){
  console.log(ary[index]);
}