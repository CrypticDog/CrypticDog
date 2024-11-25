const nav = document.querySelector('nav');
const homeLink = document.querySelector('#home a');
const servicesLink = document.querySelector('#services a');
const aboutLink = document.querySelector('#about a');
const contactLink = document.querySelector('#contact a');

nav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    const linkTarget = e.target.getAttribute('href');
    switch (linkTarget) {
      case '#home':
        homeLink.classList.add('active');
        servicesLink.classList.remove('active');
        aboutLink.classList.remove('active');
        contactLink.classList.remove('active');
        break;
      case '#services':
        servicesLink.classList.add('active');
        homeLink.classList.remove('active');
        aboutLink.classList.remove('active');
        contactLink.classList.remove('active');
        break;
      case '#about':
        aboutLink.classList.add('active');
        homeLink.classList.remove('active');
        servicesLink.classList.remove('active');
        contactLink.classList.remove('active');
        break;
      case '#contact':
        contactLink.classList.add('active');
        homeLink.classList.remove('active');
        servicesLink.classList.remove('active');
        aboutLink.classList.remove('active');
        break;
    }
  }
});

homeLink.addEventListener('click', () => {
  document.querySelector('.main-content').classList.remove('active');
});

servicesLink.addEventListener('click', () => {
  document.querySelector('.main-content').classList.add('active');
});

aboutLink.addEventListener('click', () => {
  document.querySelector('.main-content').classList.remove('active');
});

contactLink.addEventListener('click', () => {
  document.querySelector('.main-content').classList.add('active');
});