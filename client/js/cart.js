const cartList =document.querySelector('.cart-list');
const amountbutton = document.querySelector('.amount-button');
const minusbutton = document.querySelector('.minus-button') ;
const plusbutton =document.querySelector('.plus-button') ;
let amount = document.querySelector('.amount')
let price =document.querySelector('.price') ;
let subCheck = document.querySelectorAll('.sub-check');
let allAmount = document.querySelectorAll('.all-amount');
let selectAmount = document.querySelectorAll('.select-amount');
let allCheck = document.querySelectorAll('.all-check');
let moreButton = document.querySelectorAll('.more-button');
let cartSubList = document.querySelectorAll('.cart-sub-list');

amount.textContent='1';
selectAmount[0].textContent= 0;
selectAmount[1].textContent= 0;
allAmount[0].textContent = `${subCheck.length}`;
allAmount[1].textContent = `${subCheck.length}`;


function calculator(e){
  e = e.target
  // 버튼 계산기
  let i = amount.textContent;
  
  if(e == plusbutton){
    
    i++
    amount.textContent = i

    price.textContent = `${i * 4980}원`
  }
  if(e== minusbutton){
    if(i==0){
    return i= 0;
  }
  
  i--
  
  amount.textContent = i
  price.textContent = `${i * 4980}원`
}

}




amountbutton.addEventListener('click',calculator);


function clickhandler(e){
  e = e.target;
  let n = selectAmount[0].textContent;
  let m = allAmount[0].textContent;
  
  if(e.className == 'item-delete-button'){
    m--;
    e.parentNode.classList.add('is-active-hidden');
    e.parentNode.innerHTML='';
    allAmount[0].textContent=m;
    allAmount[1].textContent=m;

  } 
  
  
  // 전체 선택 서브 선택
  if(e.className == 'sub-check' && e.checked == true){
    n++;
    selectAmount[0].textContent= n;
    selectAmount[1].textContent= n;
  }
  if(e.className == 'sub-check' && e.checked == false){
    allCheck.forEach((item)=>{
      item.checked = false;
      
    })
    n--;
    selectAmount[0].textContent= n;
    selectAmount[1].textContent= n;
    
  }
    if(e.className== 'all-check'){
  
        
          if(e.checked){
                        allCheck.forEach((item)=>{
                          item.checked = true;
                          
          })
                        subCheck.forEach((item)=>{
                              item.checked = true;
                              
          })
                            
                            selectAmount[0].textContent=`${subCheck.length}`;
                            selectAmount[1].textContent=`${subCheck.length}`;
          } else{
                        allCheck.forEach((item)=>{
                          item.checked = false;
                          
                })
                        subCheck.forEach((item)=>{
                          item.checked = false;})
                          selectAmount[0].textContent=0;
                          selectAmount[1].textContent=0;
                }
         }

      if(e == moreButton[0]){
        cartSubList[0].classList.toggle('is-active-hidden')
      }
      if(e == moreButton[1]){
        cartSubList[1].classList.toggle('is-active-hidden')
      }
      if(e == moreButton[2]){
        cartSubList[2].classList.toggle('is-active-hidden')
      }

      if(e.className == 'all-delete-button' && allCheck[0].checked == true){
        cartSubList.forEach((item)=>{
          item.innerHTML = ''
          selectAmount[0].textContent=0;
          selectAmount[1].textContent=0;

          allAmount[0].textContent=0;
          allAmount[1].textContent=0;
        }

        )
      }
}


cartList.addEventListener('click',clickhandler);
