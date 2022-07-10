(()=>{"use strict";function e(){const e=document.createElement("div");e.id="footer";const t=document.createElement("h3");return t.textContent="Developed by Dan Slezak",e.appendChild(t),e}const t=document.getElementById("content");function n(){t.appendChild(function(){const e=document.createElement("div");e.id="header";const t=document.createElement("h1");t.id="navLogo",t.textContent="Culbert's Bakery",e.appendChild(t);const n=document.createElement("div");return n.id="navOptions",["home","menu","about"].forEach((e=>{const t=document.createElement("div");t.classList.add("navItem"),t.textContent=e,t.id=e,n.appendChild(t)})),e.appendChild(n),e}()),document.querySelectorAll(".navItem").forEach((d=>d.addEventListener("click",(d=>{const a=d.target.id;"home"===a?o():"menu"===a?console.log("menu"):"about"===a&&(t.innerHTML="",n(),t.appendChild(function(){const e=document.createElement("div");e.id="about";const t=document.createElement("h2");t.textContent="About Us",e.appendChild(t);const n=document.createElement("div");n.id="history";const o=document.createElement("h3");o.textContent="Quick History of Culbert's Bakery",n.appendChild(o);const d=document.createElement("p");d.textContent="Culbert’s Bakery started in the early 1800’s, but the person who opened it in this time period is unknown. In 1906 the late DJ Curry and his son Arthur took over the bakery and it was names “Curry’s West Street Bakery”. Mel Culbert took over the bakery in 1942, and as soon as he retired it was passed down to his son Berry Culbert. After many years it was passed down again to Darin Culbert who currently owns it today.",n.appendChild(d);const a=document.createElement("div"),c=document.createElement("img");c.src="./images/culberts-bakery-history-1.jpeg",c.classList.add("histImg"),a.appendChild(c);const i=document.createElement("img");return i.src="./images/culberts-bakery-history.jpeg",i.classList.add("histImg"),a.appendChild(i),n.appendChild(a),e.appendChild(n),e}()),t.appendChild(e()))}))))}function o(){t.innerHTML="",n(),t.appendChild(function(){const e=document.createElement("div");e.id="homePage";const t=document.createElement("div");t.classList.add("callToAction");const n=document.createElement("h2");n.id="welcome",n.textContent="Welcome to",t.appendChild(n);const o=document.createElement("h2");o.id="name",o.textContent="Culbert's Bakery",t.appendChild(o);const d=document.createElement("h3");d.id="tagLine",d.textContent="Home of the Famous Cream Puff",t.appendChild(d);const a=document.createElement("img");return a.src="./images/culberts-cream-puffs.jpeg",a.alt="Cream Puff Donuts",a.id="creamPuff",t.appendChild(a),e.appendChild(t),e}()),t.appendChild(e())}o()})();