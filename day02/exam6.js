// 함수 == 기능 == 여러 코드들의 집합
// 1.출력 기능/함수

console.log("안녕하세요1");
alert("안녕하세요!"); // 위에 알림 띄우기
document.write("<h3>안녕하세요</h3>"); //버려
document.querySelector("h3").innerHTML = "안녕하세요2";  // console.log로 적힌것 바꾸기

// 2. 입력 기능/함수
let 반환값1 = confirm();  // [확인=true], [취소 = false] 버튼 제공
let 반환값2 = prompt();   // 입력상자 제공 알림

console.log(반환값1);  //사용자가 선택한 값(true or false)
console.log(반환값2);  //사용자가 입력한 값

// 3. 
let 반환값3 = document.querySelector("h3").innerHTML  //h3이 마크당하고 있는 이너 호출
console.log(반환값3);
ㅇ