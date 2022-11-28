import createAboutPage from "./about";
import createHomePage from "./home";
import createMenuPage from "./menu";

export default function createHeader() {
    const content = document.querySelector('#content');
    const header = document.createElement('div');
    header.classList.add('header');

    const homeBtn = document.createElement('h1');
    homeBtn.classList.add('homeButton');
    homeBtn.innerHTML = 'Home';
    homeBtn.addEventListener('click', () => {
    content.replaceChildren();
    createHomePage();
    });

    const menuBtn = document.createElement('h1');
    menuBtn.classList.add('menuButton');
    menuBtn.innerHTML = 'Menu';
    menuBtn.addEventListener('click', () => {
        content.replaceChildren();
        createMenuPage();
    });

    const aboutBtn = document.createElement('h1');
    aboutBtn.classList.add('aboutButton');
    aboutBtn.innerHTML = 'About';
    aboutBtn.addEventListener('click', () => {
        content.replaceChildren();
        createAboutPage();
    });

    document.body.insertBefore(header, content)
    header.appendChild(homeBtn);
    header.appendChild(menuBtn);
    header.appendChild(aboutBtn);
};