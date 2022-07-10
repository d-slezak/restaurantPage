import { renderNav } from "./navBar";

const content = document.getElementById('content');

function homePage() {
    content.innerHTML= '';
    content.appendChild(renderNav());
}

homePage();