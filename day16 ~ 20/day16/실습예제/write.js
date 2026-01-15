
function boardWrite(){

  const titleinput = document.querySelector("#titleinput");
  const contentinput = document.querySelector("#contentinput");
  const pwdinput = document.querySelector("#pwdinput");

  const title = titleinput.value;
  const content = contentinput.value;
  const pwd = pwdinput.value;

  const obj = {title,content,pwd};

  let boardList = localStorage.getItem("boardList");
  if(boardList == null ){boardList=[]}
  else{boardList = JSON.parse(boardList)};

  obj.no = boardList.length == 0 ? 1 : boardList[boardList.length-1].no + 1;
  boardList.push(obj);

  localStorage.setItem("boardList", JSON.stringify(boardList));

  alert("게시물 작성 성공");
  location.href ="list.html"
}



