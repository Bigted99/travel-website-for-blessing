const menu = document.getElementById('#mobile-menu');
const menuLinks = document.getElementById('#navbar-menu');
// Display mobile menu

function hideMenu (){
   const mobileMenu = () =>{
menu.classList.toggle('is-active');
menuLinks.classList.toggle('active');
}
   menu.addEventListener('click', mobileMenu)
}


const videoTransition = document.getElementById('#myVideo');
 setTimeout(() =>{
    videoTransition.style.display = "none";
 },5000);

 function greet () {
   console.log('hello-world');
 }

 console.log(greet())

 hideMenu();