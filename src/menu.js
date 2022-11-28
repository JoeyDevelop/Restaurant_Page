export default function createMenuPage() {
    const content = document.querySelector('#content');

    //Create menu holder
    const menuHolder = document.createElement('div');
    menuHolder.classList.add('menuHolder');

    //Create Title
    const title = document.createElement('h1');
    title.innerHTML = 'Our purrrrrfect menu items!<hr>'

    //Create Drinks
    const drink1 = document.createElement('div');
    drink1.classList.add('drinks');
    const drink1Title = document.createElement('h2');
    drink1Title.innerHTML = `Yoshi's Fattachino`;
    const drink1Price = document.createElement('h3');
    drink1Price.classList.add('prices');
    drink1Price.innerHTML = `S: 3.5 &nbsp;&nbsp;&nbsp; M: 5.5 &nbsp;&nbsp;&nbsp; L: 9.5`
    const drink1Bar = document.createElement('hr');
    drink1Bar.classList.add('between');

    const drink2 = document.createElement('div');
    drink2.classList.add('drinks');
    const drink2Title = document.createElement('h2');
    drink2Title.innerHTML = `Toad's Middle Finger Croissant`;
    const drink2Price = document.createElement('h3');
    drink2Price.classList.add('prices');
    drink2Price.innerHTML = `S: 2.5 &nbsp;&nbsp;&nbsp; M: 5 &nbsp;&nbsp;&nbsp; L: 8`
    const drink2Bar = document.createElement('hr');
    drink2Bar.classList.add('between');

    const drink3 = document.createElement('div');
    drink3.classList.add('drinks');
    const drink3Title = document.createElement('h2');
    drink3Title.innerHTML = `Zuko's Flea-Filled Boba`;
    const drink3Price = document.createElement('h3');
    drink3Price.classList.add('prices');
    drink3Price.innerHTML = `S: 5 &nbsp;&nbsp;&nbsp; M: 8.5 &nbsp;&nbsp;&nbsp; L: 12.5`
    const drink3Bar = document.createElement('hr');
    drink3Bar.classList.add('between');

    // Append all elements to DOM
    content.appendChild(menuHolder);
    menuHolder.appendChild(title);
    menuHolder.appendChild(drink1);
    drink1.appendChild(drink1Title);
    drink1.appendChild(drink1Price);
    drink1.appendChild(drink1Bar);
    menuHolder.appendChild(drink2);
    drink2.appendChild(drink2Title);
    drink2.appendChild(drink2Price);
    drink2.appendChild(drink2Bar);
    menuHolder.appendChild(drink3);
    drink3.appendChild(drink3Title);
    drink3.appendChild(drink3Price);
    drink3.appendChild(drink3Bar);
}