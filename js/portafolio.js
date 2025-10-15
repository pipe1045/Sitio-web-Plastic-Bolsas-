// Header hide/show
(function(){
  const header = document.getElementById('site-header');
  let lastScroll = 0;
  window.addEventListener('scroll',()=> {
    const current = window.scrollY;
    if(current > lastScroll && current > 100){header.classList.add('header-hidden');}
    else{header.classList.remove('header-hidden');}
    lastScroll = current;
  });
})();

// Reveal sections
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('is-visible');}
  });
},{threshold:0.1});
reveals.forEach(el=>revealObserver.observe(el));

// Particle effect for each section
function createParticles(canvasId, color){
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  const particles = [];
  for(let i=0;i<50;i++){
    particles.push({
      x:Math.random()*canvas.width,
      y:Math.random()*canvas.height,
      r:Math.random()*3+1,
      dx:(Math.random()-0.5)*1.5,
      dy:(Math.random()-0.5)*1.5,
      alpha:Math.random()*0.5+0.2
    });
  }
  function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p=>{
      p.x+=p.dx; p.y+=p.dy;
      if(p.x>canvas.width||p.x<0)p.dx*=-1;
      if(p.y>canvas.height||p.y<0)p.dy*=-1;
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2,false);
      ctx.fillStyle=`rgba(${color},${p.alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// Colors: RGB
createParticles('particles-inicio','255,255,255'); // white sparkles
createParticles('particles-bolsas','60,0,255'); // blue particles
createParticles('particles-aseo','60,179,113'); // green particles
createParticles('particles-desechables','255,140,0'); // orange particles
createParticles('particles-footer','255,255,0'); // yellow footer
