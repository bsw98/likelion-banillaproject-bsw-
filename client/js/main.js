let button = document.querySelector('.AdClose');
function handler(){
  let AD = document.querySelector('.TopAd');
  AD.style.display = 'none';
}
button.addEventListener('click',handler);

let body = document.querySelector('body');
let MenuButton = document.querySelector('.MenuButton');
let MenuBar = document.querySelector('.MenuBar');
let MenuButtonList = document.querySelectorAll('.MenuBar li a')
function ShowMenu(e){
      e = e.target;

      if(e.parentNode == MenuBar || e.className == "MenuBarList"){
        
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