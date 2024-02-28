const megaMenuTriggers = document.querySelectorAll(
  '.menu__item__link[data-mega-menu-trigger]'
);

const closeAllMegaMenus = () => {
  const megaMenus = document.querySelectorAll('.mega-menu');
  megaMenus.forEach((item) => item.classList.remove('is-active'));
};

const toggleMegaMenu = (currentMegaMenu) => {
  currentMegaMenu.classList.toggle('is-active');
};

megaMenuTriggers.forEach((item) =>
  item.addEventListener('click', (e) => {
    const currentMegaMenuName = e.target.dataset.megaMenuTrigger;
    const currentMegaMenu = document.querySelector(
      `.mega-menu[data-mega-menu-name=${currentMegaMenuName}]`
    );

    // Toggle Mega Menu
    if (currentMegaMenu.classList.contains('is-active')) {
      toggleMegaMenu(currentMegaMenu);
      return;
    }

    closeAllMegaMenus();
    toggleMegaMenu(currentMegaMenu);
  })
);

// megaMenu.forEach((item, index) =>
//   item.addEventListener('mouseleave', () => {
//     megaMenu[index].classList.remove('is-active');
//   })
// );
