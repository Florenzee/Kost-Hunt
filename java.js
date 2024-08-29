const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0); 
})

let menu =document.querySelector('#menu-icon');
let navmenu =document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

document.querySelector("#show-login").addEventListener("click", function(){
document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
});

document.querySelector(".popup .close-btn2").addEventListener("click", function(){
  document.querySelector(".popup").classList.remove("active");
});

document.querySelector("#forget-pass").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
    });