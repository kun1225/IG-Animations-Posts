const megaMenu = document.querySelectorAll('.mega-menu');

const menuItem = document.querySelectorAll('.menu__item');
const menuItemWithMega = Array.from(menuItem).filter(
  (item) => item.dataset.megaMenu
);

menuItemWithMega.forEach((item, index) =>
  item.addEventListener('mouseenter', () => {
    megaMenu.forEach((item) => item.classList.remove('is-active'));
    megaMenu[index].classList.add('is-active');
  })
);

megaMenu.forEach((item, index) =>
  item.addEventListener('mouseleave', () => {
    megaMenu[index].classList.remove('is-active');
  })
);
