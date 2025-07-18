const hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
    const navBar = document.querySelector("nav");
    navBar.classList.toggle("active");
}
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
    link.onclick = function () {
        const navBar = document.querySelector("nav");
        navBar.classList.remove("active");
    }
});