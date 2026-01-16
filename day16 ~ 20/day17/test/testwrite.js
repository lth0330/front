
function boardWirte(){

  const titleDOM = document.querySelector("#titleinput");
  const idDOM = document.querySelector("#idinput");
  const pwDOM = document.querySelector('#pwinput');

  const title = titleDOM.value;
  const id = idDOM.value;
  const pw = pwDOM.value;

  let obj = {title,id,pw};

  let boardList = localStorage.getItem('boardList');
  if(boardList == null){boardList =[]}
  else{boardList = JSON.parse(boardList);}

  obj.no = boardList.length == 0 ? 1 : boardList[boardList.length-1].no+1;
  boardList.push(obj);

  localStorage.setItem('boardList', JSON.stringify(boardList))
  alert("글쓰기 성공");

  location.href ='testlist.html'



}