// Smooth Scroll
const navLinks = document.querySelectorAll('.nav-links li a');

navLinks.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

function smoothScroll(event) {
  event.preventDefault();

  const targetId = this.getAttribute('href');
  const targetSection = document.querySelector(targetId);

  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: 'smooth'
  });
}

// Scrollspy
window.addEventListener('scroll', activateSection);

function activateSection() {
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    const sectionTop = section.offsetTop - window.innerHeight * 0.5;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-links li a[href="#${sectionId}"]`);

    if (window.pageYOffset >= sectionTop) {
      navLink.classList.add('active');
    } else {
      navLink.classList.remove('active');
    }
  });
}
