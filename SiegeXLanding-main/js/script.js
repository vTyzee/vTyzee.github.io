document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const navLinks = document.querySelectorAll('[data-slide]');
  const arrows = document.querySelectorAll('.arrow');

  function showSlide(id) {
    slides.forEach((s) => {
      s.id === 'slide' + id
        ? s.classList.add('active')
        : s.classList.remove('active');
    });
  }

  // Навигация в шапке
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      showSlide(link.getAttribute('data-slide'));
    });
  });

  // Клики по стрелкам
  arrows.forEach((arr) => {
    arr.addEventListener('click', () => {
      showSlide(arr.getAttribute('data-next'));
    });
  });
});
