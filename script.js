document.addEventListener('DOMContentLoaded', () => {
  function mobileNav() {
    // Mobile nav button
    const navBtn = document.querySelector('.mobile-nav-btn');
    const nav = document.querySelector('.mobile-nav');
    const menuIcon = document.querySelector('.nav-icon');

    // Перевіряємо, чи існує елемент
    if (navBtn) {
      navBtn.onclick = function () {
        nav.classList.toggle('mobile-nav--open');
        menuIcon.classList.toggle('nav-icon--active');
        document.body.classList.toggle('no-scroll');
      };
    } else {
      console.error('Елемент .mobile-nav-btn не знайдений!');
    }
  }

  mobileNav();

  const openPopupButtons = document.querySelectorAll('.open-popup-button');

  // Перевіряємо, чи є кнопки на сторінці
  if (openPopupButtons.length > 0) {
    const popup = document.getElementById('popup');
    const closePopupButton = document.getElementById('closePopup');

    // Додаємо обробники для кожної кнопки
    openPopupButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        popup.style.display = 'block'; // Відображаємо поп-ап
      });
    });

    // Закрити поп-ап
    closePopupButton.addEventListener('click', () => {
      popup.style.display = 'none';
    });

    // Закрити поп-ап при кліку за межами
    window.addEventListener('click', (event) => {
      if (event.target === popup) {
        popup.style.display = 'none';
      }
    });
  }
});

function toggleFields() {
  const kitchenForm = document.getElementById('kitchen-form').value;
  const directFields = document.getElementById('fields-direct');
  const otherFields = document.getElementById('fields-other');

  if (kitchenForm === 'Пряма') {
    directFields.style.display = 'block';
    otherFields.style.display = 'none';
  } else {
    directFields.style.display = 'none';
    otherFields.style.display = 'block';
  }
}

window.onload = toggleFields;
