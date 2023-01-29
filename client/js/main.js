function handler(){
  let AD = document.querySelector('.TopAd');
  AD.style.display = 'none';
}
let body = document.querySelector('body')
let button = document.querySelector('.AdClose');
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
button.addEventListener('click',handler)