(()=>{"use strict";const e=e=>{let t=document.querySelector("#add-project-div"),d=document.querySelector("#add-task-div");"add-project"===e.target.id?d.classList.contains("hidden")&&(()=>{let e=document.querySelector("#add-project-div");document.querySelectorAll(".project-input").forEach((e=>{e.value=""})),e.classList.remove("hidden")})():"add-task"===e.target.id&&t.classList.contains("hidden")&&(()=>{let e=document.querySelector("#add-task-div");document.querySelectorAll(".task-input").forEach((e=>{e.value=""})),e.classList.remove("hidden")})()},t=e=>{e.target.parentElement.parentElement.parentElement.classList.add("hidden")},d=()=>{(e=>{let t=document.querySelector("#project-nav");t.innerHTML="";let d=document.createElement("li");d.classList.add("project-item");let c=document.createTextNode("All");d.appendChild(c),t.appendChild(d),e.forEach((e=>{let d=document.createElement("li");d.classList.add("project-item");let c=document.createTextNode(e.project);d.appendChild(c),t.appendChild(d)}))})(JSON.parse(localStorage.getItem("project-list")))};let c=document.querySelector("#add-project"),l=document.querySelector("#proj-div-close"),r=document.querySelector("#add-task"),o=document.querySelector("#task-div-close"),a=document.querySelector("#add-project-form");c.addEventListener("click",e),l.addEventListener("click",t),r.addEventListener("click",e),o.addEventListener("click",t),a.addEventListener("submit",(e=>{e.preventDefault();let t=document.querySelector("#project-input-field"),c=document.querySelector("#project-desc-field"),l={id:Date.now(),project:t.value,"project-desc":c.value},r=localStorage.getItem("project-list"),o=JSON.parse(r);var a,n;console.log(o),null===o&&(o=[]),o.push(l),console.log(o),a="project-list",n=JSON.stringify(o),localStorage.setItem(a,n),d(),t.value="",c.value=""})),d()})();