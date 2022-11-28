export default function createAboutPage() {
    const content = document.querySelector('#content');

    //Create title
    const title = document.createElement('div');
    title.classList.add('title');

    const titleText = document.createElement('h1');
    titleText.innerHTML= 'Meet the kings!';

    //Create images
    const imageHolder = document.createElement('div');
    imageHolder.classList.add('images');

    const image1 = document.createElement('div');
    const toadImg = document.createElement('img');
    toadImg.classList.add('kingsPictures');
    toadImg.src = '/src/imgs/Toad_Halloween.jpeg';
    const toadImgCaption = document.createElement('h3');
    toadImgCaption.classList.add('imgCaption');
    toadImgCaption.innerHTML = 'Toad, the young gentleman king';

    const image2 = document.createElement('div');
    const yoshiImg = document.createElement('img');
    yoshiImg.classList.add('kingsPictures');
    yoshiImg.src = '/src/imgs/Yoshi_Halloween.jpeg';
    const yoshiImgCaption = document.createElement('h3');
    yoshiImgCaption.classList.add('imgCaption');
    yoshiImgCaption.innerHTML = 'Yoshi, the leader of the bish chits';

    const image3 = document.createElement('div');
    const zukoImg = document.createElement('img');
    zukoImg.classList.add('kingsPictures');
    zukoImg.src = '/src/imgs/Zuko_Stairs.jpeg';
    const zukoImgCaption = document.createElement('h3');
    zukoImgCaption.classList.add('imgCaption');
    zukoImgCaption.innerHTML = 'Zuko, the spreader of illnesses';


    
    // Append all elements to webpage
    content.appendChild(title);
    title.appendChild(titleText);
    content.appendChild(imageHolder);
    imageHolder.appendChild(image1);
    image1.appendChild(toadImg);
    image1.appendChild(toadImgCaption);
    imageHolder.appendChild(image2);
    image2.appendChild(yoshiImg);
    image2.appendChild(yoshiImgCaption);
    imageHolder.appendChild(image3);
    image3.appendChild(zukoImg);
    image3.appendChild(zukoImgCaption);
}