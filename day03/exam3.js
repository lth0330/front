// 1. 숫자
100 // 숫자형
console.log(100); // 소괄호 안에서부터 읽는다.
console.log(typeof 150); // typeof  :어떤 형인지 알려줌
console.log(3.14) ; //컴퓨터는 소수점 모른다.<부동 소수점>

// 2. 문자 :  
console.log("안녕1"); //""으로 감싼 자료 
console.log('안녕2'); // ''으로 감싼 자료 
console.log(`안녕3`); // 키보드 왼쪽 tab 위에 `(빽틱기호)

//이스케이프 문자
console.log("\\안녕4") // 엔터위에 \(원화기호)
console.log("\n안녕5") // /줄바꿈
console.log("\t안녕6") // tab 기능(들여쓰기)

//템플릿 리터럴 : 문자열과 변수/수식/함수를 조합할 때
let 키 =177
console.log("나의 키 = " + 키) // 방법 1 = "문자열" + 변수명, '문자' + 숫자 
console.log(`나의 키 = ${키}`) // 방법 2 = '문자열 ${변수명/수식/함수호출}' (중요)

//문자 : 한글자, 문자열 : 두글자이상   //문자열은 배열이다.
console.log("안녕하세요".length); 
console.log("안녕하세요"[0]); 

// 3. 논리 : 제어문(조건문/반복문) 자주 사용된다.  (경우의 수가 2개인 자료)
console.log(true)   // let 영수증발급여부 = "발급" , let 영수증발급여부 ="미발급"
                    // let 영수증발급여부 = "true" , let 영수증발급여부 ="false"

// 4. 특수
let ver1 ; // 변수를 선언 할때 초기(처음)에 값을 대입(=)하지 않았다.
console.log(ver1); // 변수는 존재하지만 값이 없다. undefined
let var2 = null    // 변수의 데이터가 유효하지 않는다.
console.log(var2)  // null
console.log("")    // 

// 5. 배열 : 여러개 자료들을 *순서*
let ary1 = ['봄','여름','가을','겨울']; //인덱스 0~3

// 6. 인덱스 : 배열내 저장된 순서번호 *0번시작*, //길이는 4 인덱스는 3까지
console.log(ary1[0]); //변수명[인덱스]
console.log(ary1[1])
console.log(ary1[4])  // undefined

// 7. 배열내자료(요소) 수정 : 변수명[수정할 인덱스] = 새로운값
ary1[0] ='SPRING';
console.log(ary1[0]); // SPRING

// 8. 배열내자료(요소) 추가 : 변수명.push()  // 맨뒤에 추가
ary1.push('봄2');
console.log(ary1);

// 9. 배열내 자료(요소) 중간 삭제 : 변수명.splice()
ary1.splice(2,1); // 2번 인덱스부터 1개 삭제
console.log(ary1); // 가을 삭제

// 10. 배열내 자료(요소) 중간 삽입 : 변수명.splice(삽입할인덱스, 0, 자료)
ary1.splice(2, 0, "가을2");
console.log(ary1)

// 11. 배열내 자료(요소) 값 찾기 : 변수명.indexOf(찾을값) , 을값이 존재하면 인덱스반환 없으면 -1
let 가을인덱스 = ary1.indexOf("가을2");
console.log(가을인덱스);  //인덱스 2

// 12. 배열내자료 개수 반환 : 변수명.length , 배열내 자료 총개수 반환
console.log(ary1.length) // 5


// 형변환 , 다른 프로그래밍/환경 통신간의 데이터 변환 다수 발생
let input = prompt("숫자 : "); // prompt 무조건 문자열로 반환한다.
console.log(typeof input); // 100 -> sping(문자열)
input = input *1;          // 방법 1 "100" -> number(숫자)  // 
console.log(typeof input);   
console.log(input)

input = Number(input)      // 방법 2
console.log(Number(input));

console.log( Number("100"));     // "100" -> 100
console.log( parseInt("100"));   // "100" -> 100
console.log( parseFloat("3.14"));// "3.14"-> 3.14
console.log(String(100));        // 100 -> "100"
console.log(100+"");            // 100 -> "100"
console.log(Boolean("true"));    // "true" -> true