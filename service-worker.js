if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const o=e=>s(e,c),f={module:{uri:c},exports:r,require:o};i[c]=Promise.all(a.map((e=>f[e]||o(e)))).then((e=>(n(...e),r)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"echeck-plugin"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/assets/css/app.91c8f0df.css",revision:null},{url:"/assets/js/app.75ace2f6.js",revision:null},{url:"/assets/js/chunk-vendors.8b52ab5f.js",revision:null},{url:"/images/favicons/android-chrome-192x192.png",revision:"d5382eccea0e0a537de0fd30077a7136"},{url:"/images/favicons/android-chrome-512x512.png",revision:"4c7794756a2fb76bad9ca2120a838630"},{url:"/images/favicons/apple-touch-icon.png",revision:"452ca874be5859aa271226bc627bb5b4"},{url:"/images/favicons/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/images/favicons/favicon-16x16.png",revision:"580ca1847bc0abd8044a403ec83a8f35"},{url:"/images/favicons/favicon-32x32.png",revision:"8b4a4aa90fab1c7b7d7d96ebdf31c71e"},{url:"/images/favicons/mstile-150x150.png",revision:"7a6fa237c3554a98bfae2f543b801f35"},{url:"/images/favicons/safari-pinned-tab.svg",revision:"8213f3022874a981068b6a2968fd4f81"},{url:"/images/favicons/site.webmanifest",revision:"b9aa277fcfc34c31db6c7a7ea3469b8c"},{url:"/images/icons/archistar.ico",revision:"f2c31434928f596d028439932f603bb8"},{url:"/images/logo.png",revision:"7ad10e7d15c1ffd681fd367771e1a612"},{url:"/images/rhino.png",revision:"ae288e854552cbe10c9084aee3142346"},{url:"/index.html",revision:"889d64fdafe36a82d09b3351553e9b82"},{url:"/manifest.json",revision:"ddc407cc7c0b5c41a55ad3e02502aaae"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
