function showContactTab() {
    const main = document.querySelector("main");
    main.innerHTML = "";

    const h2 = document.createElement("h2");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    h2.textContent = "Get in touch."
    p1.textContent = "Call us or send us email at:"
    p2.textContent = "Phone: 012 234 123"
    p3.textContent = "Email: help@sushirest.com"
    p1.setAttribute("class", "contact-styling");
    p2.setAttribute("class", "contact-styling");
    p3.setAttribute("class", "contact-styling");

    main.appendChild(h2);
    main.appendChild(p1);
    main.appendChild(p2);
    main.appendChild(p3);
}


export { showContactTab };