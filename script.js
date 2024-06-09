let headerClickCount = 0;
let footerClickCount = 0;
const clickThreshold = 5;
const secretSection = document.getElementById('secret');
const changeDesignButton = document.getElementById('changeDesignButton');

const header = document.querySelector('header');
const footer = document.querySelector('footer');
const scrollUp = 0;
const scrollDown = document.documentElement.scrollHeight - document.documentElement.clientHeight;

header.addEventListener('click', () => {
    if (window.scrollY === scrollUp) {
        headerClickCount++;
        checkSecret();
    }
});

footer.addEventListener('click', () => {
    if (window.scrollY >= scrollDown) {
        footerClickCount++;
        checkSecret();
    }
});

function checkSecret() {
    if (headerClickCount >= clickThreshold && footerClickCount >= clickThreshold) {
        secretSection.style.display = 'block';
    }
}

changeDesignButton.addEventListener('click', () => {
    document.body.classList.toggle('hacker-mode');
    animateTransition();
});

function animateTransition() {
    const allElements = document.querySelectorAll('body *');
    allElements.forEach(element => {
        element.style.transition = 'background-color 0.5s, color 0.5s, border-color 0.5s';
    });

    setTimeout(() => {
        allElements.forEach(element => {
            element.style.transition = '';
        });
    }, 500);
}
