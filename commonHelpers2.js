import"./assets/modulepreload-polyfill-3cfb730f.js";import{i}from"./assets/vendor-77e16229.js";const s=document.querySelector(".form");s.addEventListener("submit",l=>{l.preventDefault();const e=Number(s.delay.value),r=s.state.value,m=new Promise((o,a)=>{setTimeout(()=>{r==="fulfilled"?o("Fulfilled "):a("Fulfilled ")},e)}),t={fontSize:"large",close:!1,position:"topRight",messageColor:"white",timeout:2e3};m.then(o=>{i.success({...t,message:`✅ Fulfilled promise in ${e}ms`})}).catch(o=>{i.error({...t,message:`❌ Rejected promise in ${e}ms`})})});
//# sourceMappingURL=commonHelpers2.js.map
