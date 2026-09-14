document.addEventListener("DOMContentLoaded",()=>{
const f=document.querySelector("#propertySearch");if(!f)return;
document.querySelectorAll(".search-tabs button").forEach(b=>b.onclick=()=>{document.querySelectorAll(".search-tabs button").forEach(x=>x.classList.remove("active"));b.classList.add("active");f.dataset.purpose=b.dataset.purpose});
f.onsubmit=e=>{e.preventDefault();const d=new FormData(f),q=new URLSearchParams();if(d.get("location"))q.set("location",d.get("location"));if(d.get("type"))q.set("type",d.get("type"));if(d.get("price"))q.set("price",d.get("price"));q.set("purpose",f.dataset.purpose||"sale");location.href="properties.html?"+q}
});