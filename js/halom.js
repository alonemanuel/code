var placeholders = [];

function setEventListeners() {
    let ps = document.getElementsByTagName( 'li');
    for (let p of ps) {
        p.addEventListener('click', () => {
            let currPlaceholder = document.getElementById('placeholder');
            if (currPlaceholder) {
                p.parentNode.removeChild(currPlaceholder);
            } else {
                let placeholder = p.parentNode.insertBefore(document.createElement('div'), p);
                placeholder.id = 'placeholder';
                placeholder.innerText = ' ';

            }
            console.debug('clicked');
            p.classList.toggle('bigFont');
            console.debug(p.classList);
        });
        
    }
}

function main() {

    setEventListeners();
}

main();