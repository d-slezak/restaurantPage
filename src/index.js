import { renderNav } from "./navBar";
import { renderHome } from "./home";
import { renderFooter } from "./footer";

const content = document.getElementById('content');

function homePage() {
    content.innerHTML= '';
    content.appendChild(renderNav());
    content.appendChild(renderHome());
    content.appendChild(renderFooter());
}

homePage();