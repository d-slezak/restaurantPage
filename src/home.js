function renderHome() {
    const homePage = document.createElement('div');
    homePage.id = 'homePage';

    const callToAction = document.createElement('div');
    callToAction.classList.add('callToAction');

    const welcome = document.createElement('h2');
    welcome.id = 'welcome';
    welcome.textContent = "Welcome to";
    callToAction.appendChild(welcome);

    const nameHeader = document.createElement('h2');
    nameHeader.id = 'name';
    nameHeader.textContent = 'Culbert\'s Bakery';
    callToAction.appendChild(nameHeader);

    const tagLine = document.createElement('h3');
    tagLine.id = 'tagLine';
    tagLine.textContent = 'Home of the Famous Cream Puff';
    callToAction.appendChild(tagLine);

    const creamPuff = document.createElement('img');
    creamPuff.src="./images/culberts-cream-puffs.jpeg";
    creamPuff.alt = "Cream Puff Donuts";
    creamPuff.id = "creamPuff";
    callToAction.appendChild(creamPuff);

    homePage.appendChild(callToAction);

    return homePage;
}

export {renderHome};
