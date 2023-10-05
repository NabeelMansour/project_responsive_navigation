const menu_btn = document.querySelector('.hamburger')

menu_btn.addEventListener('click', function(){
  console.log('hi')
  menu_btn.classList.toggle('is-active')
})