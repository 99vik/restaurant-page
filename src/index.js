import { loadElements, showHomeTab } from "./pageLoad";
import { showMenuTab } from "./menuTab";
import { showContactTab } from "./contactTab";
import './style.css';

loadElements();

const homeTab = document.querySelector("#home");
const menuTab = document.querySelector("#menu");
const contactTab = document.querySelector("#contact");

menuTab.addEventListener("click", () => showMenuTab());
homeTab.addEventListener("click", () => showHomeTab());
contactTab.addEventListener("click", () => showContactTab());
