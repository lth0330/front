

// 1. 등록
// 아이디, 비밀번호

function signup(){
const id = document.querySelector(".signId").value;
const pw = document.querySelector(".signPw").value;

localStorage.setItem('signId',id);
localStorage.setItem('signPw',pw);

  let memberList = localStorage.getItem("memberList")
  if(memberList == null){
    memberList = []
  }
  else{memberList = JSON.parse(memberList)} ;  // 타입변환


let no = memberList.length >= 1 ? memberList[memberList.length-1].no + 1 : 1

let info = {no , id , pw }
memberList.push(info); alert("회원가입성공")

 localStorage.setItem( "memberList" , JSON.stringify( memberList ) );
}

function login(){
  // 1. 입력받은 값 가져오기
  const ID = document.querySelector(".loginId").value;
  const PW = document.querySelector(".loginPw").value;

  let memberList = localStorage.getItem("memberList")
  if(memberList == null){
    memberList = []
  }
  else{memberList = JSON.parse(memberList)}   // 타입변환

  let no =memberList.length >1 ? memberList[memberList.length-1].no + 1 : 1;
  let info

  // 2. 입력받은 값이 배열 내 존재하면 성공

  for(let index=0; index<=memberList.length-1; index++){
    const member = memberList[index];
    if(member.id == ID && member.pw == PW ){
      alert("로그인성공");
      return;
    }
  }
  alert("로그인 실패");
}


