var btn = document.querySelector('header .menu .bars');
var menu = document.querySelector('header .menu ul');

btn.onclick=() => {
    menu.classList.toggle('show');
}