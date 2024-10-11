// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Add a scroll effect to show the header when scrolling up
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
      document.querySelector('header').style.top = '-80px';
  } else {
      document.querySelector('header').style.top = '0';
  }
  lastScrollTop = scrollTop;
});