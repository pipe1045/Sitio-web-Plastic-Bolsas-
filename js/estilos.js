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

function createFooterParticles() {
  const canvas = document.getElementById('particles-footer');
  const ctx = canvas.getContext('2d');

  // Ajustar tamaño del canvas al contenedor
  function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const particles = [];
  const particleCount = 90; // cantidad de partículas
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 3 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: -Math.random() * 1, // suben suavemente
      alpha: Math.random() * 0.5 + 0.3
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.dx;
      p.y += p.dy;

      // rebote horizontal
      if (p.x > canvas.width || p.x < 0) p.dx *= -1;
      // reaparecen desde abajo si salen por arriba
      if (p.y < 0) {
        p.y = canvas.height;
        p.x = Math.random() * canvas.width;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 0, ${p.alpha})`; // amarillo
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// Llamar función para el footer
createFooterParticles();
