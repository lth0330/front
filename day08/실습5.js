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
*/
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



