


// 숫자 자료(가격, 총 결제 금액, 주문수량)
console.log(2000);   // 가격
console.log(3000);   // 가격
console.log(5000);   // 총결제금액
console.log(2);      //주문수량

// 문자열 자료(제품명, 카테고리명, 주문번호)
console.log("아메리카노");                 //제품명
console.log("빽사이즈 아메리카노(ICED)")    //카테고리명 
console.log("원조커피");                  //

// 블리언 자료
const 품절여부 = true; console.log(품절여부);
const 결제여부 = true; console.log(결제여부);
const 적립여부 = false; console.log(적립여부);

// 배열 자료 (카테고리명들, 제품명들, 주문한 상품들)
let 카테고리명들 = ["커피","음료","주스/에이드"];
let 제품명들 = ["아메리카노","라데", "원조커피"];
let 주문한상품들 =["아메리카노","레몬에이드","수박주스"];
console.log(카테고리명들);
console.log(제품명들);
console.log(주문한상품들);


// 객체 자료(제품과 가격은 하나의 쌍,)

let 제품정보 = {제품명:"콜라", 가격:1000};
let 결제창 = {선택된제품:[], 총주문금액:1000};
let 출력정보 = {주문번호:10, 결제금액:3500, 메뉴이름:"커피"};
console.log(제품정보);
console.log(결제창);
console.log(출력정보);


