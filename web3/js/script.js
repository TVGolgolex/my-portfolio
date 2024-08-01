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
    reset: false, distance: '80px', duration: 2000, delay: 200
});

// HOME
ScrollReveal().reveal('.header', {origin: 'top', duration: 1700});
ScrollReveal().reveal('.home-section .left-container', {origin: 'left', duration: 1700});

// ABOUT ME
ScrollReveal().reveal('.about-section .container .picture-wrapper', {origin: 'left', duration: 800});
ScrollReveal().reveal('.about-section .container .information-wrapper', {origin: 'right', duration: 800});

// SOCIAL BRANDS
ScrollReveal().reveal('.socials-section .container h2', {origin: 'left', duration: 800});
ScrollReveal().reveal('.socials-section .container .brands-wrapper .brand.animation-1', {origin: 'bottom', duration: 800});
ScrollReveal().reveal('.socials-section .container .brands-wrapper .brand.animation-2', {origin: 'bottom', duration: 1200});
ScrollReveal().reveal('.socials-section .container .brands-wrapper .brand.animation-3', {origin: 'bottom', duration: 1600});
ScrollReveal().reveal('.socials-section .container .brands-wrapper .brand.animation-4', {origin: 'bottom', duration: 2000});
ScrollReveal().reveal('.socials-section .container .brands-wrapper .brand.animation-5', {origin: 'bottom', duration: 2400});
ScrollReveal().reveal('.socials-section .container .brands-wrapper .brand.animation-6', {origin: 'bottom', duration: 2800});

// SKILLS
ScrollReveal().reveal('.skills-section .information-wrapper', {origin: 'left', duration: 800});
ScrollReveal().reveal('.skills-section .skills-wrapper .area.animation-1', {origin: 'left', duration: 800});
ScrollReveal().reveal('.skills-section .skills-wrapper .area.animation-2', {origin: 'left', duration: 1200});
ScrollReveal().reveal('.skills-section .skills-wrapper .area.animation-3', {origin: 'left', duration: 1600});
ScrollReveal().reveal('.skills-section .skills-wrapper .area.animation-4', {origin: 'left', duration: 2000});
ScrollReveal().reveal('.skills-section .skills-wrapper .area.animation-5', {origin: 'left', duration: 2400});

// PROJECTS
ScrollReveal().reveal('.projects-section .container h2', {origin: 'left', duration: 800});
ScrollReveal().reveal('.projects-section .container .items .item.animation-1', {origin: 'bottom', duration: 1500});
ScrollReveal().reveal('.projects-section .container .items .item.animation-2', {origin: 'bottom', duration: 2500});
ScrollReveal().reveal('.projects-section .container .items .item.animation-3', {origin: 'bottom', duration: 3500});
ScrollReveal().reveal('.projects-section .container .items .item.animation-4', {origin: 'bottom', duration: 4500});

// RECOMMENDATIONS
ScrollReveal().reveal('.recommendations-section .container h2', {origin: 'left', duration: 800});
ScrollReveal().reveal('.recommendations-section .container .items .item.animation-1', {origin: 'bottom', duration: 1500});
ScrollReveal().reveal('.recommendations-section .container .items .item.animation-2', {origin: 'bottom', duration: 2500});
ScrollReveal().reveal('.recommendations-section .container .items .item.animation-3', {origin: 'bottom', duration: 3500});
ScrollReveal().reveal('.recommendations-section .container .items .item.animation-4', {origin: 'bottom', duration: 4500});