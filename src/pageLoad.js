import pic1 from './pic1.png';

function loadElements() {        
    const content = document.querySelector(".content");
    createHeader(content);
    createMain(content);
    createFooter(content);
    };

    function createHeader(content) {
        const header = document.createElement("header");
        const div = newDiv();
        const headText = document.createElement("h1");
        headText.textContent = "Sushi restaurant";
        div.appendChild(headText);
        header.append(div);
        
        const nav = document.createElement("nav");
        const hr = document.createElement("hr");
        nav.appendChild(hr);
        const ul = document.createElement("ul");
        ul.appendChild(createLi("home"));
        ul.appendChild(createLi("menu"));
        ul.appendChild(createLi("contact"));
        nav.appendChild(ul);
        header.appendChild(nav);

        content.appendChild(header);
    };

    function createMain(content) {
        const main = document.createElement("main");
        const h2 = document.createElement("h2");
        h2.textContent = "Welcome to sushi restaurant!";
        main.appendChild(h2);

        const div = newDiv();
        div.setAttribute("class", "horizontal-container");
        const img = new Image();
        img.src = pic1;
        div.appendChild(img);
        const div2 = newDiv();
        div2.setAttribute("class", "quote");
        const q = document.createElement("q");
        q.textContent = "Sushi is not just food; it's an art form, an experience.";
        const p = document.createElement("p");
        p.textContent = " - Francis Mallmann";
        div2.appendChild(q);
        div2.appendChild(p);
        div.appendChild(div2);
        const btn = document.createElement("button");
        btn.textContent = "Book your experience";
        btn.setAttribute("class", "book-btn");
        main.appendChild(div);
        main.appendChild(btn);

        content.appendChild(main);
    };

    function createFooter(content) {
        const footer = document.createElement("footer");
        footer.textContent = "Copyright © Sushi restaurant (this is fake)";
        content.appendChild(footer);
    }

    function newDiv() {
        return document.createElement("div");
    };

    function createLi(text) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        li.appendChild(a);
        a.setAttribute("id", text);
        text = text.charAt(0).toUpperCase() + text.slice(1);
        a.textContent = text;
        return li
    }

    function showHomeTab() {
        const main = document.querySelector("main");
        main.innerHTML = "";

        const h2 = document.createElement("h2");
        h2.textContent = "Welcome to sushi restaurant!";
        main.appendChild(h2);

        const div = newDiv();
        div.setAttribute("class", "horizontal-container");
        const img = new Image();
        img.src = pic1;
        div.appendChild(img);
        const div2 = newDiv();
        div2.setAttribute("class", "quote");
        const q = document.createElement("q");
        q.textContent = "Sushi is not just food; it's an art form, an experience.";
        const p = document.createElement("p");
        p.textContent = " - Francis Mallmann";
        div2.appendChild(q);
        div2.appendChild(p);
        div.appendChild(div2);
        const btn = document.createElement("button");
        btn.textContent = "Book your experience";
        btn.setAttribute("class", "book-btn");
        main.appendChild(div);
        main.appendChild(btn);
    }


export { loadElements, showHomeTab };