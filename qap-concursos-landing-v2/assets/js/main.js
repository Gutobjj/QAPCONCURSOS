// QAP Concursos — main.js (v2)

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href && href !== '#') {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Year
const y = document.querySelector('[data-year]'); if (y) y.textContent = new Date().getFullYear();

// Reveal animation
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add('opacity-100','translate-y-0');
      io.unobserve(en.target);
    }
  })
},{ threshold:.12 });
document.querySelectorAll('[data-reveal]').forEach(el => {
  el.classList.add('opacity-0','translate-y-6','transition','duration-700');
  io.observe(el);
});

// Slider (testimonials)
(() => {
  const slider = document.querySelector('.slider');
  if (!slider) return;
  const track = slider.querySelector('.slider-track');
  const slides = slider.querySelectorAll('.slide');
  let i = 0;
  function go(n){
    i = (n + slides.length) % slides.length;
    track.style.transform = `translateX(-${i*100}%)`;
  }
  slider.querySelector('[data-prev]').addEventListener('click', () => go(i-1));
  slider.querySelector('[data-next]').addEventListener('click', () => go(i+1));
  setInterval(()=>go(i+1), 6000);
})();

// FAQ
document.querySelectorAll('.faq-item').forEach(item => {
  item.querySelector('.faq-q').addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

// Sticky CTA (mobile)
document.querySelectorAll('[data-whats]').forEach(btn => {
  btn.addEventListener('click', () => {
    const msg = encodeURIComponent('Olá! Quero conhecer os materiais da QAP Concursos. Pode me orientar?');
    const numbers = ['5579976701963','5579999557460'];
    const pick = numbers[Math.floor(Math.random()*numbers.length)];
    window.open(`https://wa.me/${pick}?text=${msg}`, '_blank');
  });
});

// Modal Quiz -> WhatsApp
(() => {
  const openBtn = document.querySelector('[data-open-quiz]');
  const modal = document.getElementById('quiz-modal');
  if (!openBtn || !modal) return;
  const closeEls = modal.querySelectorAll('[data-close]');
  const nextBtn = modal.querySelector('[data-next]');
  const prevBtn = modal.querySelector('[data-prev]');
  const steps = Array.from(modal.querySelectorAll('[data-step]'));
  let idx = 0;

  function setStep(n){
    idx = Math.max(0, Math.min(steps.length-1, n));
    steps.forEach((s, i) => s.classList.toggle('hidden', i !== idx));
    modal.querySelectorAll('.step-dot').forEach((d,i)=>d.classList.toggle('active', i<=idx));
    prevBtn.classList.toggle('hidden', idx===0);
    nextBtn.textContent = idx === steps.length-1 ? 'Concluir e chamar no WhatsApp' : 'Próximo';
  }

  openBtn.addEventListener('click', () => { modal.classList.add('open'); setStep(0); });
  closeEls.forEach(el => el.addEventListener('click', () => modal.classList.remove('open')));
  prevBtn.addEventListener('click', () => setStep(idx-1));
  nextBtn.addEventListener('click', () => {
    if (idx < steps.length-1) { setStep(idx+1); return; }
    // Build WhatsApp message
    const nome = modal.querySelector('input[name="nome"]').value || 'Sem nome';
    const cargo = modal.querySelector('select[name="cargo"]').value;
    const banca = modal.querySelector('select[name="banca"]').value;
    const estado = modal.querySelector('select[name="estado"]').value;
    const msg = encodeURIComponent(
      `Olá! Sou ${nome}. Estou focado(a) em ${cargo} / ${estado}, banca ${banca}. Quero indicação dos melhores materiais (PDFs e Simulados) da QAP.`
    );
    const numbers = ['5579976701963','5579999557460'];
    const pick = numbers[Math.floor(Math.random()*numbers.length)];
    window.open(`https://wa.me/${pick}?text=${msg}`, '_blank');
    modal.classList.remove('open');
  });
})();