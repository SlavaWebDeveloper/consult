// Import our custom CSS
import '../scss/styles.scss'

// import 'bootstrap/js/dist/alert';
// import 'bootstrap/js/dist/alert';
import 'bootstrap/js/dist/button';
import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/offcanvas';
// import 'bootstrap/js/dist/popover';
import 'bootstrap/js/dist/scrollspy';
import 'bootstrap/js/dist/tab';
import 'bootstrap/js/dist/toast';
import 'bootstrap/js/dist/tooltip';

document.addEventListener('DOMContentLoaded', function () {
  function handleScroll() {
    const header = document.getElementById('header-all');
    const headerNavbar = header.querySelector('.navbar');

    if (window.scrollY > 50) {
      headerNavbar.style.opacity = '0'; 
      headerNavbar.style.pointerEvents = 'none';
    } else {
      headerNavbar.style.opacity = '1'; 
      headerNavbar.style.pointerEvents = 'auto'; 
    }
  }

  function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function() {
      const context = this;
      const args = arguments;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function() {
          if ((Date.now() - lastRan) >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  }

  window.addEventListener('scroll', throttle(handleScroll, 1000));
});

document.addEventListener('DOMContentLoaded', function() {
  function adjustDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
      // Убираем класс dropend при каждом вызове, чтобы не было дублирования
      dropdown.classList.remove('dropend');

      // Если ширина экрана от 320 до 900px, добавляем класс dropend
      if (window.innerWidth >= 640 && window.innerWidth < 900) {
        dropdown.classList.add('dropend');
      }
    });
  }

  // Запускаем функцию при загрузке страницы
  adjustDropdowns();

  // И при изменении размера экрана
  window.addEventListener('resize', adjustDropdowns);
});
