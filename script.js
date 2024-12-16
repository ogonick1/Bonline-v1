function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');

	navBtn.onclick = function () {
		nav.classList.toggle('mobile-nav--open');
		menuIcon.classList.toggle('nav-icon--active');
		document.body.classList.toggle('no-scroll');
	};
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
      console.log(`Натиснута кнопка для товару №${index + 1}`);
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
