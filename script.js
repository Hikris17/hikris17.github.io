// Smooth scroll
document.querySelectorAll('a.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Highlight navbar on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollPos = window.scrollY + 80; // offset for navbar height

  sections.forEach(sec => {
    const top = sec.offsetTop;
    const bottom = top + sec.offsetHeight;
    const id = sec.getAttribute('id');
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if(link){
      if(scrollPos >= top && scrollPos < bottom){
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
});
