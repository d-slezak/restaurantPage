import { renderNav } from "./navBar";
import { renderHome } from "./home";
import { renderFooter } from "./footer";
import { renderAbout } from "./about";

const content = document.getElementById('content');


function addNav(){
    content.appendChild(renderNav());

    const navItems = document.querySelectorAll('.navItem');
    navItems.forEach(item => item.addEventListener('click', (e) => {
        const action = e.target.id;
        if(action === 'home')
        {
            homePage();
        }
        else if(action === 'menu')
        {
            console.log('menu');
        }
        else if (action === 'about')
        {
            aboutPage();
        }
    }))
}

function homePage() {
    content.innerHTML= '';
    addNav();
    content.appendChild(renderHome());
    content.appendChild(renderFooter());
}

function aboutPage() {
    content.innerHTML = '';
    addNav();
    content.appendChild(renderAbout());
    content.appendChild(renderFooter());
}

homePage();