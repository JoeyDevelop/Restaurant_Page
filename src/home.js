export default function createHomePage() {

    const content = document.querySelector('#content');

    // Create Title section of homepage
    const homeTitle = document.createElement('div');
    homeTitle.classList.add('title');

    const catIcon = document.createElement('img');
    catIcon.classList.add('catIcon');
    catIcon.src = '/src/imgs/cat-animal-icon.png';

    const catIcon2 = document.createElement('img');
    catIcon2.classList.add('catIcon');
    catIcon2.src = '/src/imgs/cat-animal-icon.png';

    const titleWords = document.createElement('h1');
    titleWords.innerHTML = 'Cat Cafe!'

    content.appendChild(homeTitle);
    homeTitle.appendChild(catIcon);
    homeTitle.appendChild(titleWords);
    homeTitle.appendChild(catIcon2);

    //Create picture element of homepage
    const toadAndYoshiPicture = document.createElement('img');
    toadAndYoshiPicture.classList.add('toadAndYosh');
    toadAndYoshiPicture.src = '/src/imgs/IMG_1221.jpeg'

    content.appendChild(toadAndYoshiPicture);

    //Create brag box
    const bragBox = document.createElement('div');
    bragBox.classList.add('brag');

    const bragText = document.createElement('h3');
    bragText.innerHTML = `Toad was just so sweet he cuddled me the whole 
    time! Yoshi\'s little pissed off face was to die for. Zuko was sweet 
    too but he seemed to smell worse than the others.`
    
    content.appendChild(bragBox);
    bragBox.appendChild(bragText);
}