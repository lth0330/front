// [1] 함수 : 함(상자/공간/블록) 수(숫자/코드/명령어)
//누군가가 상자에 미리 넣어둔 숫자/코드
// 왜? 한번 넣어둔 숫자/코드를 재사용한 예) 수학(공식), 라이브러리/API

//[2] 함수 만들기
function 내가만든함수(){  // fun start
  console.log("내가만든 함수");//중괄호 안에 미리 정의할 코드 
} // fun end


// [3] 함수 호출/사용하기
내가만든함수();

// [4] 함수 종류 : 1.내가만든함수 function, 2. 남이 만든 함수 console.log() alert(), prompt() 등

// [5] 함수 예
function 믹서기함수(과일 ) {
  let 주스 = 과일 + "주스";
  return 주스
}

console.log(믹서기함수("사과"))


// [6] 매개변수 X , 반환 X 
function func1() {
  console.log("func1 exe");
  func1()
}

// 매개면수 O, 반환 X , 대표적으로 console.log()
function func2(x, y) {
  console.log("func2 exe");
  func2(3,5)
}

// 매개변수 O , 반환 O , 대표적으로 prompt()
function func3( x, y){ console.log("func3 exe"); return x+y;}
let return1 = func3(3,5)
// 매개변수 X , 반환 O
function func4() { console.log("func4 exe"); return 10;}
let return2 = func4()

// [7] 지역변수란? 특정한 if/for/함수 {} 안에서 선언된(매개) 변수는 {}밖에서 호출/사용 불가능
let 전역변수 = "대한민국";
if(true){
  let 지역변수1 = "경기도";
  console.log(지역변수1)  //여기는 지역변수 안이여서 출력가능
  for(let i=0; i<1; i++){
    let 지역변수2 = "안양시"
  }
  //console.log(지역변수2)  여기서도 for문 밖이기 때문에 호출하면 오류발생
} 

//console.log(지역변수1)   지역변수 밖이기 때문에 여기서 호출하면 오류발생

function func5(지역변수3){  //매개변수 또한 지역변수의 특징을 갖는다!   장점 : 함수 호출/사용 시에만(저장소)사용
  let 지역변수4 ="수원시";
}
func5("안산시")

//[8] 함수 호출/사용 하는 방법
//(1) js애서 호출 : 함수명();
alert("js에서 실행");
// (2) HTML에서 호츌 : <마크업명 이벤트 속성명="함수명()" />
// onclick : 해당 마크업 클릭했을때 (이벤트/js) 발생
// <button onclick="alert('HTML에서 실행')" > 버튼</button>   //HTML에 작성








