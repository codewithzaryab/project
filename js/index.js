let searchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick =()=>{
    searchform.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchform.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
        }


let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick =()=>{
    shoppingCart.classList.toggle('active');
   
    searchform.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
        }


let loginForm = document.querySelector('.login-form');
document.querySelector('#user-btn').onclick =()=>{
    loginForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchform.classList.remove('active');
   
    navbar.classList.remove('active');
        }

// this is not working
let navbar = document.querySelector('.navabar');
document.querySelector('#menu-btn').onclick =()=>{
    navbar.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchform.classList.remove('active');
    loginForm.classList.remove('active');
   
        }

window.scroll = () =>{    
    shoppingCart.classList.remove('active');
    searchform.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
        }