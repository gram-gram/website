function scrollValue() {
    var navbar = document.getElementById('nav-wrapper');
    var scroll = window.scrollY;

    if (scroll < 1) {
        navbar.classList.remove('BgColor');
    } else {
        navbar.classList.add('BgColor');
    }
}

window.addEventListener('scroll', scrollValue);
