"use strict";(globalThis.webpackChunksage=globalThis.webpackChunksage||[]).push([[143],{965:(e,t,o)=>{var a=o(575),r=o(211);var s=o(30);const c=()=>{var e=window.pageYOffset;window.onscroll=function(){var t=window.pageYOffset;document.getElementById("site-header").style.top=e>t?"0":"-87px",e=t};const t=document.querySelector(".menu-mogile-toggler"),o=document.querySelector(".menu-mobile");t.addEventListener("click",(function(){const e=this.querySelector("#icon-bar-1"),t=this.querySelector("#icon-bar-2");o.classList.contains("menu-open")?(o.classList.remove("menu-open"),(0,s.Z)({targets:o,height:0,easing:"easeInQuad",duration:500}),(0,s.Z)({targets:e,x:4,y:3,rotate:0}),(0,s.Z)({targets:t,x:0,y:12,rotate:0})):(o.classList.add("menu-open"),(0,s.Z)({targets:o,height:"400px",easing:"easeOutQuad",duration:500}),(0,s.Z)({targets:e,x:5.1109,y:2.98959,rotate:"45"}),(0,s.Z)({targets:t,x:2.98959,y:12.8891,rotate:"-45"}))}))};const n=async e=>{e&&console.error(e),document.querySelectorAll(".darkModeToggler").forEach((e=>{let t=e.querySelector(".darkModeIconLight"),o=e.querySelector(".darkModeIconDark");"dark"===localStorage.theme||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.classList.add("dark"),o.classList.remove("hidden"),t.classList.add("hidden")):(document.documentElement.classList.remove("dark"),o.classList.add("hidden"),t.classList.remove("hidden"))})),document.querySelectorAll(".tooltip-subject").forEach((e=>{const t=e.querySelector(".tooltip"),o=(0,r.fi)(e,t,{placement:e.dataset.popperPlacement,modifiers:[{name:"offset",options:{offset:[0,8]}}]});function a(){t.setAttribute("data-show",""),o.update()}let s=null;["mouseenter","focus"].forEach((t=>{e.addEventListener(t,(function(){s=setTimeout(a,500)}))})),["mouseleave","blur"].forEach((o=>{e.addEventListener(o,(function(){clearTimeout(s),t.removeAttribute("data-show")}))}))})),c(),document.querySelectorAll(".darkModeToggler").forEach((e=>{e.addEventListener("click",(function(){!function(e){const t=document.querySelector("html"),o=e.querySelector(".darkModeIconLight"),a=e.querySelector(".darkModeIconDark");"light"===localStorage.theme?(localStorage.theme="dark",t.classList.add("dark"),o.classList.add("hidden"),a.classList.remove("hidden")):(localStorage.theme="light",t.classList.remove("dark"),o.classList.remove("hidden"),a.classList.add("hidden"))}(this)}))})),addEventListener("keydown",(e=>{"/"===e.key&&(e.preventDefault(),document.querySelector(".search-field").focus()),"Escape"===e.key&&(e.preventDefault(),document.querySelector(".search-field").blur())}))};(0,a.Z)(n)},31:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[575,211],(()=>(t(965),t(31)))),e.O()}]);