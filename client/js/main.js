let button = document.querySelector('.adClose');
function handler(){
  let AD = document.querySelector('.topAd');
  AD.style.display = 'none';
}
button.addEventListener('click',handler);

let body = document.querySelector('body');
let MenuButton = document.querySelector('.menuButton');
let MenuBar = document.querySelector('.menuBar');
let MenuButtonList = document.querySelectorAll('.menuBar li a')
function ShowMenu(e){
      e = e.target;

      if(e.parentNode == MenuBar || e.className == "menuBarList"){
        
        MenuBar.style.top = '276px';
        MenuButtonList.forEach((item)=>{item.style.display = 'block'})
      }
      else{
        
        MenuBar.style.top = 0;
        MenuButtonList.forEach((item)=>{item.style.display = 'none'})
      }
}



body.addEventListener('mouseover',ShowMenu);


// 스와이퍼

const swiper = new Swiper('.swiper', {
  autoplay: true,
  loop: true, // 무한루프로 걸어서 맨 앞으로 후루룩 돌아오는 걸 방지
  speed: 1000,
  pagination: {
    el: '.swiper-pagination',
  },
})

// 스크롤


// const navigation = document.querySelector('.navigation');
// const mini = document.querySelector('.mininavigation');



// function scrollHandeler(e){

  
//   if(window.scrollY >= 175){
    
//     mini.style.display = 'flex';
//     navigation.style.display = 'none';
//   }else{
//     mini.style.display = 'none';
//     navigation.style.display = 'flex'
//   }
// }

// window.addEventListener('scroll',scrollHandeler)
// 전체 체크 전체 체크 해제

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



// 로그인


const LoginButton = document.querySelector('.LoginButton');
const LoginId = document.querySelector('.id-input');
const LoginPw = document.querySelector('.pw-input');

function loginEvent(){
  let id = LoginId.value;
  let pw = LoginPw.value;
  (id=='admin'&&pw=='admin')?alert('로그인성공'):alert('로그인실패')
}

LoginButton.addEventListener('click',loginEvent)