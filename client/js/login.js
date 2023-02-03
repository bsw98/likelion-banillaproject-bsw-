let button = document.querySelector('.adClose');
function handler(){
  let AD = document.querySelector('.topAd');
  AD.style.display = 'none';
}
button.addEventListener('click',handler);
//로그인 
const loginbutton = document.querySelector('.LoginButton');
const idInput = document.querySelector('.id-input');
const pwInput = document.querySelector('.pw-input');


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
   alert('로그인 성공')
  }


}

loginbutton.addEventListener('click',loginhandler)