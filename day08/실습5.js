/*
// 문제 1번 배열에서 최댓값 찾기
let numbers=[23,5,67,12,88,34];
let b = numbers[0];
for(let i = 1; i <= numbers.length - 1; i++){
  if(b < numbers[i] ){
    b = numbers[i]}
    
}console.log(b);


// 문제 2 : 별 찍기(기본 역삼각형)
 let output = '';

for(let t1 = 1; t1<=5; t1++){
  for(let t2 = 0; t2<=5-t1; t2++){
  output+="*";}
 output+='\n';
}
console.log(output)

// 3번 문제
let userNames=['김하준','이서하','박민솔','최도윤']
for(let a=0; a <= userNames.length-1; a++ ){
  if(userNames[a].indexOf('솔') != -1){
    console.log(userNames[a]);
    break;
  }
  
}

 
//4번 2차원 배열의 모든 요소 출력하기
let numbers=[['A1','A2','A3'],['B1','B2','B3'],['C1','C2','C3']]
for(let f1 = 0; f1 <=numbers.length-1; f1++){
  for(let f2 = 0; f2 <=numbers[f1].length-1; f2++){
    console.log(numbers[f1][f2])
  }
}


// 문제 5번 배열의 중복 요소 제거하기
let numbers2=[1,5,2,3,5,1,4,2];
let newAry =[];

for(i5 = 0; i5 <=numbers2.length-1; i5++){
  
  if(newAry.indexOf(numbers2[i5]) == -1){
    newAry.push(numbers2[i5])
    
  }
}console.log(newAry)

// 문제 6번 버블 정렬 구현하기    인접한 인덱스끼리 비교하여 올림차순 또는 내림차순으로 배열을 만든다.
let numbers3=[5,3,4,1,2];

for(let s = 0; s<numbers3.length-1; s++){
  for(let ss =0; ss<numbers3.length-1-s; ss++){
    if(numbers3[ss] >numbers3[ss-1]){
        let temp = numbers3[ss];
        numbers3[ss] = numbers3[ss+1];
        numbers3[ss+1]= temp
    }
  }
} console.log(numbers3)


// 문제 7 : 재고 관리 시스템
let products=['볼펜','노트',' 지우개'];
let stock=[10,5,20];
let name = prompt("제품명 : ")
let find = -1 //찾은 인덱스 없으면 -1
for( let i = 0; i<products.length-1; i++){
  if(products[i]==name){
    find = i
   break;
  }
} 


if(find == -1){
  console.log(`없는 제품명입니다.`)
}
else{
  let count = Number(prompt("수량"));
  if(stock[find] >=count)
  {
    console.log(`구매완료!`)
  }
  else{
    console.log("재고가 부족합니다.")
  }
}


// 문제 8번
let movienames =['히든페이스','위키드','글래디에이터2','창설']
let movieratings=[8,4,7,6]
// 순회 : 첫인덱스부터 마지막 인덱스까지
//누적합계 (변수+= 새로운값), (변수 = 변수 + 새로운값)
let html = ''
for(let index = 0; index<= movienames.length-1; index++){
  let movie = movienames[index];
  html +=`<div>${movie}`

  let rating = movieratings[index]
  for(let r= 0; r<=10; r++){
      if(rating >= r){html +=`<span> ●<span>`}
      else{html +=`<span> ○<span>`}
  }
  html+=`</div>`
}
document.write(html);

// 문제 9번 : 좌석 예약 상태 표시하기

let seatStatus = ['빈좌석', '예약석','예약석', '빈좌석', '예약석', '빈좌석']
let html9 =``;
for( let sS = 0; sS <= seatStatus.length-1; sS++){
  html9 += `<span style=" color : ${seatStatus[sS]=="빈좌석"? "bule" : "red"};">
  ${seatStatus[sS]}
  </span>
  `;
}
document.write(html9)



// 문제 10 : 주차 요금 정산하기
let carNumbers=["201어7125", "142가7414","888호8888","164주5994"];
let useMinutes=[65,30,140,420];

let html10=``;
for(index =0; index <= carNumbers.length-1; index++){
  let number = carNumbers[index];
  html10 += `<div> <span> ${number}</span>`;

  let min = useMinutes[index];
  html10+=`<span> ${min}분 주차 </span>`

  let money = 0;
  if(min <=30){ money = 1000;}
  else{ 
    money = parseInt((min -30)/10)*500 + 1000;
  }
  if(money>20000){ money =20000}
  html10+=`<span> ${money.toLocaleString()}원 </span>`
    html10 +=`</div>`
}
//toLocaleString() = 천단위 기호 (,)
document.write(html10);

*/












