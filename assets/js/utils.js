window.Prisgord={};
Prisgord.formatMoney=(v,p)=>!v?(p==="display"?"VIEWING BY APPOINTMENT":"PRICE ON REQUEST"):new Intl.NumberFormat("en-GH",{style:"currency",currency:"GHS",maximumFractionDigits:0}).format(v)+(p==="rent"?" / month":"");
Prisgord.getSaved=()=>{try{return JSON.parse(localStorage.getItem("prisgord_saved")||"[]")}catch(e){return[]}};
Prisgord.setSaved=a=>localStorage.setItem("prisgord_saved",JSON.stringify(a));
Prisgord.toggleSaved=id=>{let a=Prisgord.getSaved(),i=a.indexOf(id);i>-1?a.splice(i,1):a.push(id);Prisgord.setSaved(a);return i===-1};
Prisgord.toast=m=>{let t=document.querySelector(".toast");if(!t){t=document.createElement("div");t.className="toast";document.body.appendChild(t)}t.textContent=m;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)};
Prisgord.query=k=>new URLSearchParams(location.search).get(k);
Prisgord.escape=s=>String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
