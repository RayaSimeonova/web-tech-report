const menuBtn = document.getElementById("menu-btn");
const navContainer = document.querySelector(".nav");
const navWrapper = document.getElementById("nav-wrapper");

const toggleSwitchBtn = document.getElementById("switch-btn");
const modeIcons = document.getElementsByClassName("switch-theme-icon");
const themeTogglerWrapper = document.getElementById("theme-toggler");
const root = document.getElementById("root");
const pageHeader = document.getElementById("page-header");

const sections = document.querySelectorAll("section[id], article[id]");

menuBtn.addEventListener('click', toggleMenu);
toggleSwitchBtn.addEventListener("click", toggleTheme);
window.addEventListener("scroll", navHighlighter);

function toggleMenu() {
    navWrapper.classList.toggle("light");
    navWrapper.classList.toggle("opened");

    navContainer.classList.toggle('nav');
    navContainer.classList.toggle('visible');
}

function toggleTheme() {
    Array.from(modeIcons).forEach(element => {
        element.classList.toggle("hidden");
    })

    themeTogglerWrapper.classList.toggle("light-mode");
    root.classList.toggle("light");
    navWrapper.classList.toggle("light-active");
}

function navHighlighter() {
  
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;

        const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector("#page-nav a[href*=" + sectionId + "]").classList.add("active");
        } else {
            document.querySelector("#page-nav a[href*=" + sectionId + "]").classList.remove("active");
        }
    });

}



