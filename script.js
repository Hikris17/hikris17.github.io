// TYPING EFFECT
const text = ["Data Analyst", "Machine Learning Enthusiast", "Data Science Enthusiast"];
let count = 0; let index = 0; let currentText = ""; let letter = "";
function type(){
  if(count === text.length) count = 0;
  currentText = text[count];
  letter = currentText.slice(0, ++index);
  document.querySelector(".typing").textContent = letter;
  if(letter.length === currentText.length){count++;index=0;}
  setTimeout(type,120);
}
type();

// SKILL BAR ANIMATION
const skillBars = document.querySelectorAll('.bar div');
window.addEventListener('scroll',()=>{
  const skillsSection = document.getElementById('skills');
  if(window.scrollY + window.innerHeight >= skillsSection.offsetTop + 100){
    skillBars[0].style.width='90%';
    skillBars[1].style.width='80%';
    skillBars[2].style.width='85%';
    skillBars[3].style.width='95%';
  }
});

// FADE-IN SECTIONS
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
},{threshold:0.2});
sections.forEach(sec=>observer.observe(sec));

// DARK MODE TOGGLE
document.getElementById('darkModeToggle').addEventListener('click',()=>{
  document.body.classList.toggle('dark-mode');
});

// SMOOTH SCROLL ACTIVE LINK
const navLinks=document.querySelectorAll('.navbar a[href^="#"]');
window.addEventListener('scroll',()=>{
  let scrollPos=window.scrollY+80;
  sections.forEach(sec=>{
    const top=sec.offsetTop, bottom=top+sec.offsetHeight;
    const id=sec.getAttribute('id');
    navLinks.forEach(link=>{
      link.classList.toggle('active',link.getAttribute('href')==='#'+id && scrollPos>=top && scrollPos<bottom);
    });
  });
});
