import maki_pic from './maki-rolls.jpg';
import cali_pic from './california-roll.jpg';
import nigiri_pic from './nigiri.jpg';


function showMenuTab() {
    const main = document.querySelector("main");
    main.innerHTML = "";

    main.appendChild(createMenuCard("Maki rolls", maki_pic, "Traditional sushi roll that consists of fish, vegetables, rice and rolled up in a seaweed."));
    main.appendChild(createMenuCard("California rolls", cali_pic, "California roll, a type of inside-out sushi roll (uramaki) in which vinegared rice (rather than nori, an edible seaweed) forms the outside of the roll, usually encompassing cucumber, crab (or imitation crab), and avocado."));
    main.appendChild(createMenuCard("Nigiri", nigiri_pic, "Nigiri sushi is that familiar style of sushi made up of an oval-shaped mound of rice with a slice of (usually) raw fish on top."));
}

function createMenuCard(title, picture, text) {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const img = new Image();
    img.src = picture;

    div.setAttribute("class", "menu-card");
    h3.textContent = title;
    p.textContent = text;
    div.appendChild(h3);
    div.appendChild(img);
    div.appendChild(p);

    return div
}

export { showMenuTab };