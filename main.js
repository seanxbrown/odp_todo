(()=>{"use strict";const e=e=>{let t=document.querySelector("#add-project-div"),d=document.querySelector("#add-task-div");"add-project"===e.target.id?d.classList.contains("hidden")&&(()=>{let e=document.querySelector("#add-project-div");document.querySelectorAll(".project-input").forEach((e=>{e.value=""})),e.classList.remove("hidden")})():"add-task"===e.target.id&&t.classList.contains("hidden")&&(()=>{let e=document.querySelector("#add-task-div");document.querySelectorAll(".task-input").forEach((e=>{e.value=""})),e.classList.remove("hidden")})()},t=e=>{e.target.parentElement.parentElement.parentElement.classList.add("hidden")},d=e=>{let t=JSON.parse(localStorage.getItem("project-list")),d=Number(e.target.parentElement.getAttribute("data-key"));t=t.filter((e=>d!==e.id)),c("project-list",JSON.stringify(t))},r=({id:e,project:t,desc:d})=>{let r=document.querySelector("#project-name"),l=document.querySelector("#project-desc");r.setAttribute("data-key",e),r.innerHTML=t,l.innerHTML=d},l=e=>{if(null!==e.target.getAttribute("data-key")&&void 0!==e.target.getAttribute("data-key"))if("all"===e.target.getAttribute("data-key"))r({id:"all",project:"All Tasks",desc:"All tasks are listed here"});else{let t=[...JSON.parse(localStorage.getItem("project-list"))].filter((t=>Number(e.target.getAttribute("data-key"))===t.id))[0];r(t)}},a=()=>{let e=JSON.parse(localStorage.getItem("project-list"));null!==e&&(e=>{let t=document.querySelector("#project-nav");t.innerHTML="";let r=document.createElement("li");r.classList.add("project-item"),r.setAttribute("data-key","all"),r.addEventListener("click",l);let a=document.createTextNode("All");r.appendChild(a),t.appendChild(r),e.forEach((e=>{let r=document.createElement("li");r.classList.add("project-item"),r.setAttribute("data-key",e.id),r.addEventListener("click",l);let a=document.createTextNode(e.project),c=document.createElement("button"),o=document.createTextNode("X");c.classList.add("btn"),c.classList.add("btn-project"),c.classList.add("btn-remove"),c.appendChild(o),c.addEventListener("click",d),r.appendChild(a),r.appendChild(c),t.appendChild(r)}))})(e)},c=(e,t)=>{localStorage.setItem(e,t),a()};let o=document.querySelector("#add-project"),i=document.querySelector("#proj-div-close"),n=document.querySelector("#add-task"),s=document.querySelector("#task-div-close"),u=document.querySelector("#add-project-form");o.addEventListener("click",e),i.addEventListener("click",t),n.addEventListener("click",e),s.addEventListener("click",t),u.addEventListener("submit",(e=>{e.preventDefault();let t=document.querySelector("#project-input-field"),d=document.querySelector("#project-desc-field"),r={id:Date.now(),project:t.value,desc:d.value},l=JSON.parse(localStorage.getItem("project-list"));null===l&&(l=[]),l.push(r),c("project-list",JSON.stringify(l)),t.value="",d.value=""})),a()})();