let menuIcon = document.querySelector('#menuIcon');
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-x");
    navbar.classList.toggle("active");
    if (window.scrollY < 91) {
        let header = document.querySelector('.header');
        if (header.classList.contains('sticky')) {
            header.classList.remove('sticky');
        } else {
            header.classList.add('sticky');
        }
    }
    document.getElementById("#header").classList.add("sticky");
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {

    let header = document.querySelector(".header");
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 170;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    header.classList.toggle('sticky', window.scrollY > 90);
    menuIcon.classList.remove("fa-x");
    navbar.classList.remove("active");
};

new ScrollReveal({
    reset: true, distance: '80px', duration: 2000, delay: 200
});

ScrollReveal().reveal('.header', {origin: 'top', duration: 2700});
ScrollReveal().reveal('.home-section h1', {origin: 'left', duration: 1500});
ScrollReveal().reveal('.home-section h5, .home-section p', {origin: 'left', duration: 1800});
ScrollReveal().reveal('.home-section p', {origin: 'left', duration: 2300});


