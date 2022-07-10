function render() {
    const header = document.createElement('div');
    header.id = 'header';

    const navLogo = document.createElement('h1');
    navLogo.id = 'navLogo';
    navLogo.textContent = "Culbert's Bakery";
    header.appendChild(navLogo);

    const navItems = ['home', 'menu', 'about'];
    const navOptions = document.createElement('div');
    navOptions.id = 'navOptions';
    
    navItems.forEach( item => {
        const navItem = document.createElement('div');
        navItem.classList.add('navItem');
        navItem.textContent = item;
        navItem.id = item;

        navOptions.appendChild(navItem);
        
    })

    header.appendChild(navOptions);

    return header;
}

export {render as renderNav};