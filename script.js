document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
// Получаем элементы
const burgerButton = document.getElementById('burgerButton');
const burgerLinks = document.getElementById('burgerLinks');

// Переключение видимости меню
burgerButton.addEventListener('click', () => {
  if (burgerLinks.style.display === 'flex') {
    burgerLinks.style.display = 'none'; // Скрываем меню
  } else {
    burgerLinks.style.display = 'flex'; // Показываем меню
  }
});

// Показывать бургер-меню только при прокрутке
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    burgerButton.style.display = 'block'; // Показываем бургер-кнопку
  } else {
    burgerButton.style.display = 'none'; // Скрываем бургер-кнопку
    burgerLinks.style.display = 'none'; // Скрываем меню
  }
});