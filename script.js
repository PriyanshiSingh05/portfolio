function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

// REVEAL
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    if(el.getBoundingClientRect().top < window.innerHeight - 100){
      el.classList.add('active');
    }
  });
});

// CURSOR GLOW
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e)=>{
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});