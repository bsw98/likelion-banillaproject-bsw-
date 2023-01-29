function handler(){
  let AD = document.querySelector('.TopAd');
  AD.style.display = 'none';
}
let body = document.querySelector('body')
let button = document.querySelector('.AdClose');
let MenuButton = document.querySelector('.MenuButton');
let MenuButtonList = document.querySelectorAll('.MenuBar li')
function ShowMenu(e){
      e = e.target;
      
      if(e == button){
        let AD = document.querySelector('.TopAd');
        AD.style.display = 'none';
      }
      if(e == MenuButton){
       
        MenuButtonList.forEach((item)=>{item.style.display = 'block'})
      }else{
        
        MenuButtonList.forEach((item)=>{item.style.display = 'none'})
      }
}



body.addEventListener('click',ShowMenu);
button.addEventListener('click',handler)