document.addEventListener("DOMContentLoaded",()=>{
const h=document.querySelector(".header"),b=document.querySelector(".mobile-menu-btn");
if(b)b.onclick=()=>{h.classList.toggle("mobile-open");b.textContent=h.classList.contains("mobile-open")?"CLOSE":"MENU"};
document.querySelectorAll("[data-menu]").forEach(x=>x.onclick=()=>{const d=x.parentElement.querySelector(".dropdown");if(d)d.style.display=d.style.display==="block"?"":"block"});
});