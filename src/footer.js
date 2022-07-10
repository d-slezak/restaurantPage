function renderFooter() {
    const footer = document.createElement('div');
    footer.id = 'footer';

    const sign = document.createElement('h3');
    sign.textContent = "Developed by Dan Slezak";

    footer.appendChild(sign);

    return footer;
}

export {renderFooter};