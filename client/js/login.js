let button = document.querySelector('.adClose');
function handler(){
  let AD = document.querySelector('.topAd');
  AD.style.display = 'none';
}
button.addEventListener('click',handler);
//로그인 
const logoutbutton = document.querySelector('.logout-button');
const loginbutton = document.querySelector('.LoginButton');
const idInput = document.querySelector('.id-input');
const pwInput = document.querySelector('.pw-input');
const loginvisual = document.querySelector('.login');

function logincheck(){
  if(localStorage.login == 1){
    loginvisual.style.display ='none'
    logoutbutton.style.display='block'
  }else{
    logoutbutton.style.display='none'
  }
}


logincheck()
function loginhandler(){
  if(!idInput.value){
    return alert('아이디를 입력해주세요.')
  } else if(!pwInput.value){
    return alert('비밀번호를 입력해주세요.')
  }
  if(!localStorage.id){
    return alert('아이디가 존재하지 않습니다.')
  }
  if( idInput.value !== localStorage.id){
    return alert('아이디를 잘못 입력하셨습니다.')
  }
  if(idInput.value == localStorage.id && pwInput.value !== localStorage.pw){
    return alert('비밀번호를 잘못 입력하셨습니다.')
    
  }

  if( idInput.value == localStorage.id && pwInput.value == localStorage.pw){
   alert('로그인 성공');
   localStorage.setItem("login", 1)
   location.href='./login.html'
  }


}


function logouthandler(){
  if(!localStorage.login){
    return alert('이미 로그아웃 됐습니다.')
  }
  localStorage.removeItem("login");
  alert('로그아웃 됐습니다.');
  location.href='./login.html'
  
}

logoutbutton.addEventListener('click',logouthandler);
loginbutton.addEventListener('click',loginhandler)