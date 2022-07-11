import { MenuItemFactory } from "./menuItem";

function renderMenu() {
    const toAdd = ['Cinnamon Rolls', 'Cream Puffs', 'Easter Cup Cakes', 'Log Roll', 'Strawberry Tarts', 'Valentines Cake'];
    const menuItems = [];
    toAdd.forEach(item => {
        menuItems.push(MenuItemFactory(item, `./images/product${item.replace(/\s+/g, '')}.jpg`));
    })

    const menu = document.createElement('div');
        menu.id = 'menuPage';

        const menuHeader = document.createElement('h2')
        menuHeader.textContent = 'Our Products';
        menu.appendChild(menuHeader);

        const itemsDiv = document.createElement('div');
        itemsDiv.id = 'menuItems';

        menuItems.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('menuItem');
            
            const itemName = document.createElement('h4');
            itemName.textContent = item.name;
            itemDiv.appendChild(itemName);
            itemDiv.appendChild(item.createImgDom());

            itemsDiv.appendChild(itemDiv);
        })

        menu.appendChild(itemsDiv);

        return menu;

}

export { renderMenu }