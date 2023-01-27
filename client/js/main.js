function handler(){
  let AD = document.querySelector('.TopAd');
  AD.style.display = 'none';
}
let button = document.querySelector('.AdClose')

button.addEventListener('click',handler)