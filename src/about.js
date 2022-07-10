function renderAbout() {
    const about = document.createElement('div');
    about.id = 'aboutPage';

    const aboutHeader = document.createElement('h2');
    aboutHeader.textContent = 'About Us';
    about.appendChild(aboutHeader);

    const historyDiv = document.createElement('div');
    historyDiv.id = 'history';

    const historyHeader = document.createElement('h3');
    historyHeader.textContent = "Quick History of Culbert's Bakery";
    historyDiv.appendChild(historyHeader);

    const historyP = document.createElement('p');
    historyP.textContent = "Culbert’s Bakery started in the early 1800’s, but the person who opened it in this time period is unknown. In 1906 the late DJ Curry and his son Arthur took over the bakery and it was names “Curry’s West Street Bakery”. Mel Culbert took over the bakery in 1942, and as soon as he retired it was passed down to his son Berry Culbert. After many years it was passed down again to Darin Culbert who currently owns it today.";
    historyDiv.appendChild(historyP);

    const historyImages = document.createElement('div');
    historyImages.id = 'histImgs';

    const imgleft = document.createElement('img');
    imgleft.src = "./images/culberts-bakery-history-1.jpeg";
    imgleft.classList.add('histImg');
    historyImages.appendChild(imgleft);

    const imgRight = document.createElement('img');
    imgRight.src = "./images/culberts-bakery-history.jpeg";
    imgRight.classList.add('histImg');
    historyImages.appendChild(imgRight);

    historyDiv.appendChild(historyImages);

    about.appendChild(historyDiv);

    return about;

}

export {renderAbout};