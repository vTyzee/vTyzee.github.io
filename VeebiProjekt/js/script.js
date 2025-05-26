// shop.html: фильтрация товаров
document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const game=btn.dataset.game;
    document.querySelectorAll('.product-card').forEach(card=>{
      card.style.display=(game==='all'||card.dataset.game===game)?'flex':'none';
    });
  });
});

// Intersection Observer: анимация секций
const observer=new IntersectionObserver((entries,obs)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
      obs.unobserve(e.target);
    }
  });
},{threshold:0.15});
document.querySelectorAll('.animate-section,.container').forEach(el=>observer.observe(el));

// Мобильное меню
const tog=document.querySelector('.mobile-toggle');
const nav=document.querySelector('.main-nav');
tog?.addEventListener('click',()=>nav.classList.toggle('open'));
document.addEventListener('DOMContentLoaded', () => {
  const modalOverlay = document.getElementById('order-modal');
  const closeBtn     = modalOverlay.querySelector('.modal-close');
  const form         = document.getElementById('order-modal-form');

  // Открываем модалку на все кнопки «Buy / Order»
  document.querySelectorAll('.add-to-cart, .cta-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      modalOverlay.classList.remove('hidden');
    });
  });

  // Закрываем модалку
  closeBtn.addEventListener('click', () => {
    modalOverlay.classList.add('hidden');
  });
  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) modalOverlay.classList.add('hidden');
  });

  // Обработка отправки формы
  form.addEventListener('submit', e => {
    e.preventDefault();
    // Здесь можно собрать данные и отправить AJAX-запрос
    const data = {
      name:  form.name.value,
      email: form.email.value,
      notes: form.notes.value
    };
    console.log('Order data:', data);
    // для примера:
    alert('Thank you, ' + data.name + '! Your order has been placed.');
    modalOverlay.classList.add('hidden');
    form.reset();
  });
});
