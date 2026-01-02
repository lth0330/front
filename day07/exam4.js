/*
// [1] for문 중첩 : for문 안에 for

// [2] 2단 구구단
for(let 곱 = 1; 곱<= 9 ; 곱++){
  console.log(`2 X ${곱} = ${2*곱}`);
}

// 2단 ~ 9단 
for(let 단 = 1; 단<= 9 ; 단++){
  for(let 곱 = 1; 곱<= 9 ; 곱++){
       console.log(`${단} X ${곱} = ${단 * 곱}`)
  }
  
}

// 1.곱마다 단을 계산하는건지? 2.단 마다 곱을 계산하는건지?


// [2] 별 출력하기
/*      line(row)   star(column)
*       1           1
**      2           1 2
***     3           1 2 3
****    4           1 2 3 4
*****   5           1 2 3 4 5

let output = "";
let line = 0;
let star = 0;
for(line = 1; line <=5 ; line++){
  for(star= 1; star <=line; star++){
        output = output + "*";}
    output = output + "\n" ;
}
console.log(output)


// [3] 반복문과 자주 사용되는 키워드 
// (1) continue;

for(let i = 1; i<=5; i++){
  if( i == 3){continue ;}
  console.log(i)
}

// (2) break;
for(let i = 1; i<=5; i++){

 if( i == 3){break;}
  console.log(i)
}

// (3) 무한루프 : 종료가 없이 계속되는 반복문
// 방법 1 : for( ; ; ;){console.log(1);}
// 방법 2   while(true){console.log(1);}
// 활용 1 : for(  ; ; ;){ }{let a = prompt("무한입력 : ");}
// 활용 2 : for(  ; ; ;){ }{let b = prompt("무한입력 : "); if (b == "X") {break;}}

*/