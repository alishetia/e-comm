let bars = document.querySelector("#header #mobile #bar");
let navbar = document.querySelector("#navbar");
let close = document.querySelector("#close");

bars.addEventListener('click', () => {
    navbar.style.right = "0";
})

close.addEventListener('click', () => {
    navbar.style.right = "-300px";
})
