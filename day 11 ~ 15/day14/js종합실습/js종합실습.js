
let title = [
  {코드 : 1, 이미지 :"https://placehold.co/" ,카테고리명 : 1, 상품명 : "코카콜라", 가격 : "1,000", 등록일 :"2025-06-17", 비고 : "버튼"},
  {코드 : 2, 이미지 :"https://placehold.co/" ,카테고리명 : 2, 상품명 : "새우깡", 가격 : "1,200", 등록일 :"2025-06-18" ,비고 : "버튼"},
  {코드 : 3, 이미지 :"https://placehold.co/" ,카테고리명 : 1, 상품명 : "칠성사이다", 가격 : "900", 등록일 :"2025-06-19" ,비고 : "버튼"}
]

let categorrys = {음료 : 1, 과자 : 2, 아이스크림 : 3};

function productpush(){
  let categoryDOM = document.querySelector("#category");
  let categorry = categoryDOM.value;
  
  let catenum =  categorrys[categorry]
  let productNameDOM = document.querySelector("#productName");
  let name = productNameDOM.value;
  let productPriceDOM = document.querySelector("#productPrice");
  let price = productPriceDOM.value;
  let productImgDOM = document.querySelector("#productImg");
  let img = productImgDOM.files[0]; console.log(img);

// 유효성 검사
if(categorry == "disabled"){
  alert("카테고리명를 선택하세요.!");
  return;
}
  // 컴퓨터 날짜는 1월 = 0, 2월 = 1 , 3월 = 1 , 12월은 11로 되어있다.
  const year = new Date().getFullYear();
  const month = new Date().getMonth()+1;
  const day = new Date().getDate();
  const date = `${year}-${month < 10 ? "0"+month : month}-${day< 10 ? "0"+day : day}`;

  let code = title[title.length-1].코드+1
  let product = {코드 : code , 이미지 : img == undefined ? "https://placehold.co/ " : URL.createObjectURL(img), 카테고리명 : catenum, 상품명 : name, 가격 : price, 등록일 :date}
  title.push(product)
  console.log(title)
 productNameDOM.value=''
 productPriceDOM.value=''
 productImgDOM.files[0]=''
 categoryDOM.value='disabled'
  productDisplay()
}




productDisplay(); // js가 열렸을 때 최초 한번 실행
function productDisplay(){

  let table = document.querySelector("#tbodyAdd");

  let html =``
  for(let index=0; index<=title.length-1; index++){
  let tbodyAdd = title[index];
  html += `<tr>
           <td><img src ="${tbodyAdd.이미지}"/></td>
           <td>${tbodyAdd.카테고리명}</td>
           <td>${tbodyAdd.상품명}</td>
           <td>${tbodyAdd.가격}</td>
           <td>${tbodyAdd.등록일}</td>
           <td><button class="remove" onclick="func1(${tbodyAdd.코드})">삭제</button>
               <button class="retry" onclick="func2(${tbodyAdd.코드})">수정</button></td>
           </tr> `
}
  table.innerHTML = html;
}


function func1(코드){

  // 1. pcode의 인덱스 찾기
  for(index = 0; index <= title.length-1; index++)
    if(코드==title[index].코드){
      title.splice(index,1); //splice(삭제할인덱스,갯수)
      productDisplay() // 삭제성공시 화면 새로고침/랜더링
      break;
      
    }
  // 2. 
 
}
function func2(코드){
  for(index = 0; index <= title.length-1; index++)
    if(코드==title[index].코드){
    const newName = prompt("수정할 상품명 :")
    const newPrice = prompt("수정할 가격")
    title[index].상품명 =newName
    title[index].가격 = newPrice
    productDisplay()
    return;
}
}
