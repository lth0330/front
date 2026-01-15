
getBoard();
function getBoard(){
  const url = new URLSearchParams(location.search);
  const selectNo = url.get('no');
  let boardList = localStorage.getItem('boardList');
  if(boardList == null){boardList =[];}
  else{boardList = JSON.parse(boardList);}
  for(let i =0; i<boardList.length; i++){
    const obj = boardList[i];
    if(obj.no == selectNo){
      document.querySelector('#titleinput').value=obj.title
      document.querySelector('#contentinput').value=obj.content
    }
  }
}

function boardUpdate(){
  const url = new URLSearchParams(location.search)

  const selectNo = url.get('no')

  let boardList = localStorage.getItem('boardList');
  if(boardList == null){boardList =[];}
  else{boardList = JSON.parse(boardList)}

  for(let i= 0; i<boardList.length; i++){
    const obj = boardList[i];
  if(obj.no == selectNo){
    obj.title = document.querySelector('#titleinput').value;
    obj.content = document.querySelector('#contentinput').value
    obj.pwd = document.querySelector('#pwdinput').value

    localStorage.setItem('boardList', JSON.stringify(boardList))

    alert('수정 완료');
    location.href = `view.html?no=${selectNo}`
  }  }
}