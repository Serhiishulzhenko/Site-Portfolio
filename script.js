
let showMenu = document.getElementById("open-menu");
let hiddenMenu = document.getElementById("close-menu");
let menuBlock = document.getElementById("mobile_menu_container");
let chooseLink = document.getElementsByClassName('nav_link');

const ShowMenuFunction = () => {
    menuBlock.style.display = "block";
};
const HiddenMenuFunction = () => {
    menuBlock.style.display = "none";
};

showMenu.onclick = ShowMenuFunction;
hiddenMenu.onclick = HiddenMenuFunction;

const allMenuBtns = () => {
    menuBlock.style.display = "none";
};