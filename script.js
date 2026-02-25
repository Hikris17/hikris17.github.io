// TYPING EFFECT
const text = ["Data Analyst", "Machine Learning Enthusiast", "Data Science Enthusiast"];
let count = 0, index = 0, currentText = "", letter = "";
function type(){
  if(count===text.length) count=0;
  currentText=text[count];
  letter=currentText.slice(0,++index);
  document.querySelector(".typing").textContent=letter;
  if(letter.length===currentText.length){count++;index=0;}
  setTimeout(type,120);
}
type();

// SKILL BAR ANIMATION
const skillBars=document.querySelectorAll('.bar div');
window.addEventListener('scroll',()=>{
  const skillsSection=document.getElementById('skills');
  if(window.scrollY+window.innerHeight>=skillsSection.offsetTop+100){
    skillBars[0].style.width='90%';
    skillBars[1].style.width='80%';
    skillBars[2].style.width='85%';
    skillBars[3].style.width='95%';
  }
});

// FADE-IN SECTIONS
const sections=document.querySelectorAll('.section');
const observer=new IntersectionObserver(entries=>{
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
    const top=sec.offsetTop, bottom=top+sec.offsetHeight, id=sec.getAttribute('id');
    navLinks.forEach(link=>{
      link.classList.toggle('active',link.getAttribute('href')==='#'+id && scrollPos>=top && scrollPos<bottom);
    });
  });
});

// HAMBURGER MENU
const hamburger=document.getElementById('hamburger');
const navLinksContainer=document.getElementById('nav-links');
hamburger.addEventListener('click',()=>{
  navLinksContainer.style.display = navLinksContainer.style.display==='flex' ? 'none' : 'flex';
});

// PROJECT MODAL
const modal=document.getElementById('project-modal');
const modalBody=document.getElementById('modal-body');
const modalClose=document.querySelector('.modal .close');
const projectData=[
  {title:"Supermarket Analysis Dashboard",desc:"EDA dan visualisasi data penjualan supermarket untuk insight bisnis."},
  {title:"Sentiment Analysis Riliv",desc:"Pipeline analisis sentimen dan dashboard visualisasi tren."},
  {title:"Telecom Customer Analytics",desc:"Analysis of churn rates and telecommunications customer KPIs."},
  {title:"Healthplus Capstone",desc:"Health application creation and development."},
  {title:"Streamlit Project",desc:"Dashboard application using Streamlit."},
  {title:"Object Detection",desc:"Membuat object detection menggunakan Tensorflow."}
];

document.querySelectorAll('.view-project').forEach((btn,i)=>{
  btn.addEventListener('click',()=>{
    const data=projectData[i];
    modalBody.innerHTML=`<h3>${data.title}</h3><p>${data.desc}</p>`;
    modal.style.display='flex';
  });
});

modalClose.addEventListener('click',()=>{modal.style.display='none';});
window.addEventListener('click',e=>{if(e.target==modal) modal.style.display='none';});
