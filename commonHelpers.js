import{a as x,S as I,i as p}from"./assets/vendor-BjmtRwYh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();const O="45237903-940e6dd06b8edc671dac0e6f2",$="https://pixabay.com/api/",B=15,y=async(e,t=1,o=B)=>{try{const s={key:O,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:o};return(await x.get($,{params:s})).data}catch(s){throw console.error("Error fetching images:",s),s}};function h(e){return e.map(({webformatURL:t,largeImageURL:o,tags:s,likes:r,views:a,comments:n,downloads:q})=>`<li class="gallery-list">
        <a class="gallery-link" href="${o}" >
          <img
            class="gallery-image"
            src="${t}"
            alt="${s}"
          />
          <ul class="gallery-block">
            <li>
              <p class="gallery-text">Likes</p>
              <p class="gallery-info">${r}</p>
            </li>
            <li>
              <p class="gallery-text">Views</p>
              <p class="gallery-info">${a}</p>
            </li>
            <li>
              <p class="gallery-text">Comments</p>
              <p class="gallery-info">${n}</p>
            </li>
            <li>
              <p class="gallery-text">Downloads</p>
              <p class="gallery-info">${q}</p>
            </li>
          </ul>
        </a>
      </li>`).join("")}function D(){document.querySelector(".gallery").innerHTML=""}function L(e){document.querySelector(".gallery").insertAdjacentHTML("beforeend",e)}const c=document.getElementById("search-form"),g=document.getElementById("search-input"),i=document.querySelector(".load-more"),b=document.getElementById("loader"),m={text:""},S="search-form-state",E=15;M();let l="",d=1,v;c.addEventListener("input",N);c.addEventListener("submit",k);i.addEventListener("click",A);function N(e){const{name:t,value:o}=e.target;m[t]=o.trim(),localStorage.setItem(S,JSON.stringify(m))}function M(){try{const e=localStorage.getItem(S);if(!e)return;const t=JSON.parse(e);for(const[o,s]of Object.entries(t))c.elements[o]&&(c.elements[o].value=s,m[o]=s)}catch(e){console.error("Error parsing localStorage data:",e)}}async function k(e){if(e.preventDefault(),l=g.value.trim(),!l){f();return}D(),d=1,i.classList.add("is-hidden"),P();try{const t=await y(l,d);if(u(),t.hits.length===0){w("No images found for your query");return}const o=h(t.hits);L(o),v=new I(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom",className:"simple-lightbox"}),t.hits.length<E?i.classList.add("is-hidden"):i.classList.remove("is-hidden"),g.value=""}catch{u(),f()}}async function A(){d+=1,P();try{const e=await y(l,d);u();const t=h(e.hits);L(t),v.refresh(),F(),(e.hits.length<E||e.hits.length===0)&&(i.classList.add("is-hidden"),w("We're sorry, but you've reached the end of search results."))}catch{u(),f()}}function F(){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}function f(e){p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}function w(e){p.info({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function P(){b.style.display="block"}function u(){b.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
