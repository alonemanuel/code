function setEventListeners() {
    let ps = document.querySelectorAll('li > *');
    for (p of ps) {
        p.addEventListener('click', () => {
            console.debug('clicked');
            p.classList.add('bigFont');
            console.debug(p.classList);
        });
        
        console.debug(p);
    }
}

function main() {

    setEventListeners();
}

main();