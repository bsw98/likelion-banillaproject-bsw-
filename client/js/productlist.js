const menuNavigation = document.querySelector('.menu-navigation');
const menuList = document.querySelectorAll('.menu-main-name');
const subList = document.querySelectorAll('.menu-sub-list');


function menuhandler(e){
    e = e.target;
    if(e==menuList[1]){
      
      subList[0].classList.toggle('is-active-hidden')
    }
    if(e==menuList[2]){
      
      subList[1].classList.toggle('is-active-hidden')
    }
    if(e==menuList[3]){
    
      subList[2].classList.toggle('is-active-hidden')
    }
    if(e==menuList[4]){
     
      subList[3].classList.toggle('is-active-hidden')
    }
    if(e==menuList[5]){
      
      subList[4].classList.toggle('is-active-hidden')
    }
    if(e==menuList[6]){
      
      subList[5].classList.toggle('is-active-hidden')
    }
    
}


menuNavigation.addEventListener('click',menuhandler);
