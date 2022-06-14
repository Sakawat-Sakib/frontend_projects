let toggleMenu = document.querySelector('.toggle-menu');
let mainNav = document.querySelector('.top-nav');

toggleMenu.addEventListener('click',()=>{
	mainNav.classList.toggle('open');
});