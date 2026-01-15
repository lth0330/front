
 // [1] 다른 js 파일에서 변수/함수 사용 가능여부
 // 하나의 HTML에서 여러개 JS 파일 호출했을 때
 //  <script src='test01.js'></script>
 //  <script src='exam01.js'></script>
 console.log(var1);
 func1();

 // [2] js는 HTML에 종속된 관계라서 F5(새로고침) 초기화(변수 재생성)
 // 백엔드 필요하다. 백엔드 없이 영구저장 할 수 있다.
 // 자동로그인, 검색기록, 비회원제장바구니, 최근본제품 등등 (쿠키)

 // 웹스토리지 : 1. 브라우저 -> F12 ->[APPLICATION/응용프로그램] 탭 -> 왼쪽 사이드바 메뉴
 //               [로컬저장소] / [세션 저장소]
 //            2. 종류
 //               1] sessionStorage : 세선 저장소를 관리하는 객체  
 //                                   * 도메인(HTTP 조소)동일할때 (서로 다른 HTML 끼리 공유 불가능)
 //                                   * 모든 브라우저가 종료되면 자료 자동 삭제
 //               2] localStorage : 로컬 자장소를 관리하는 객체(기능/데이터) 
 //                                 *(서로 다른 HTML 끼리 공유가능)
 //                                 * 모든 브라우저가 종료되도 자료삭제 안됨(사용자가 직접 삭제해야함)

 console.log(sessionStorage);   // 세션/로컬 저장소에 속성/자료 추가
 console.log(localStorage);

//              3. 주요 기능/함수
//                 1] .setItem('key',value);    : 세선/로컬 저장소에 속성/자료 추가
//                 2] .getItem('key);           : 세선/로컬 저장소에 'key' 해당하는 자료 호출
//                 3] .removeItem('key');       : 세선/로컬 저장소에 'ket' 삭제 ( value 같이 삭제됨)
//                    .clear();                 : 모든 key 삭제
 // (1) 저장
sessionStorage.setItem('name','유재석');  //브라우저 -> F12 ->[APPLICATION/응용프로그램] 탭 -> 왼쪽 사이드바 메뉴 [로컬저장소] / [세션 저장소]
localStorage.setItem('age', 27);  
 
// (2) 호출
console.log(sessionStorage.getItem('name')); // 세선저장소에 저장된 'name' 키값을 갖는 값 호출
console.log(localStorage.getItem('age'));

// (3) 삭제
sessionStorage.removeItem('name') //브라우저 -> F12 ->[APPLICATION/응용프로그램] 탭 -> 왼쪽 사이드바 메뉴 [로컬저장소] / [세션 저장소]
localStorage.removeItem('age')

// (4) 활용   
// 세선/로컬 저장소는 문자열만 저장이 가능하다.
// 배열/객체 --> 문자열로 변환  
// 자바스크립트 객체 기반의 문자열 형식
sessionStorage.setItem('회원목록', JSON.stringify([{name : "유재석", age : 27},{name : "이태형", age : 27}]));
console.log(JSON.parse(sessionStorage.getItem('회원목록')));