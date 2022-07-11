import { MenuItemFactory } from "./menuItem";

function renderMenu() {
    const toAdd = ['Cinnamon Rolls', 'Cream Puff', 'Easter Cup Cakes', 'Log Roll', 'Strawberry Tart', 'Valentines Cake'];
    const menuItems = [];
    toAdd.forEach(item => {
        menuItems.push(MenuItemFactory(item, `./images/product${item.replace(/\s+/g, '')}.jpeg`));
    })

    menuItems.forEach(item => {
        console.log( item.createImgDom());
    })
}

export { renderMenu }