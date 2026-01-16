
boardPrint()

function boardPrint(){

  const boardTbody = document.querySelector('#boardTbody');

  let boardList = localStorage.getItem('boardList')
  if(boardList == null){boardList =[]}
  else{boardList = JSON.parse(boardList)}

  let html = ``
  
  for( let index = 0; index<= boardList.length-1; index++){
    let obj = boardList[index]
    
    html += `<tr>
          <th>${obj.no}</th>
          <th><a href='view.html?no=${obj.no}'>${obj.title}</th>
        </tr>`

  }
 boardTbody.innerHTML = html
}