
(() => {
  const header = document.querySelector('[data-nav]');
  const toggle = document.querySelector('.nav-toggle');
  if (toggle && header) toggle.addEventListener('click', () => {
    const open = header.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  const revealItems = document.querySelectorAll('.hero,.section,.panel,.bridge-card,.poem-card,.route-card,.museum-card,.info-tile,.gallery-shell,.timeline,.callout');
  revealItems.forEach(el => el.classList.add('reveal'));
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    revealItems.forEach(el => observer.observe(el));
  } else revealItems.forEach(el => el.classList.add('visible'));

  document.querySelectorAll('[data-gallery]').forEach(gallery => {
    const images = JSON.parse(gallery.dataset.gallery || '[]');
    if (!images.length) return;
    let index = 0;
    const main = gallery.querySelector('[data-gallery-main]');
    const counter = gallery.querySelector('[data-gallery-counter]');
    const thumbs = gallery.querySelector('[data-gallery-thumbs]');
    const prev = gallery.querySelector('[data-prev]');
    const next = gallery.querySelector('[data-next]');

    function render() {
      main.src = images[index];
      main.alt = `${gallery.dataset.title || 'Изображение'} — фото ${index + 1}`;
      counter.textContent = `${index + 1} / ${images.length}`;
      thumbs.querySelectorAll('button').forEach((button, i) => button.classList.toggle('active', i === index));
    }

    images.forEach((src, i) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.setAttribute('aria-label', `Открыть изображение ${i + 1}`);
      const img = document.createElement('img');
      img.src = src;
      img.alt = `Миниатюра ${i + 1}`;
      img.loading = 'lazy';
      button.appendChild(img);
      button.addEventListener('click', () => { index = i; render(); });
      thumbs.appendChild(button);
    });

    prev?.addEventListener('click', () => { index = (index - 1 + images.length) % images.length; render(); });
    next?.addEventListener('click', () => { index = (index + 1) % images.length; render(); });
    gallery.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') { index = (index - 1 + images.length) % images.length; render(); }
      if (e.key === 'ArrowRight') { index = (index + 1) % images.length; render(); }
    });
    render();
  });
})();
