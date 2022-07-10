import { renderNav } from "./navBar";
import { renderHome } from "./home";

const content = document.getElementById('content');

function homePage() {
    content.innerHTML= '';
    content.appendChild(renderNav());
    content.appendChild(renderHome());
}

homePage();