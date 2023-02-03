let button = document.querySelector('.adClose');
function handler(){
  let AD = document.querySelector('.topAd');
  AD.style.display = 'none';
}
button.addEventListener('click',handler);




// 전체 버튼
let allCheck = document.querySelector('.all-check');
let subCheck = document.querySelectorAll('.sub-check');

function checkhandler(){
  
  if(allCheck.checked){
    subCheck.forEach((item)=>{
          item.checked = true;
    }) 
  } else{
    subCheck.forEach((item)=>{
      item.checked = false;})
  }
}

allCheck.addEventListener('click',checkhandler)

// 활성화버튼
const register = document.querySelector('.register');

let pw = document.querySelector('.pw-input');
let repw = document.querySelector('.repw-input');
let id = document.querySelector('.id-input');

let email = document.querySelector('.email-input');
let resgisterButton =document.querySelector('.register-button');


function keycheck(e){
  e = e.target

  if (pw.value.length >= 8&&email.value.includes('@') && email.value.includes('.') )
  { 
    // disable 쓰지마세요
    resgisterButton.disabled = false
  } else{
    
    resgisterButton.disabled = true
  } 
  
}

register.addEventListener('keyup',keycheck)




// 회원가입 버튼

function regit(){
  if(pw.value !== repw.value){
  
    return alert('비밀번호를 다시 한번 확인해주세요')
  }
  localStorage.clear();
  localStorage.setItem("id", id.value);
  localStorage.setItem("pw", pw.value);
  localStorage.setItem("email", email.value);
  alert('가입완료!')
  
}


resgisterButton.addEventListener('click',regit)