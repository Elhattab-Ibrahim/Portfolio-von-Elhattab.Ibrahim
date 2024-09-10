const menu = document.querySelector("#menu")
const nav = document.querySelector(".links")

menu.oncklick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}