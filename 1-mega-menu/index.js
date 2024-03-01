
const closeAllMegaMenus = () => {
  const megaMenus = document.querySelectorAll('.mega-menu');
  megaMenus.forEach((item) => item.classList.remove('is-active'));
};
const toggleMegaMenu = (currentMegaMenu) => {
  currentMegaMenu.classList.toggle('is-active');
};

/*
接著加上 JS
利用 [data-mega-menu-trigger] 就可以指選取有 mega menu 的連結
並用 dataset.megaMenuTrigger 來取得相對的 mega menu

而可以使用 classList.contains() 來判斷當前 mega menu 是否已經開啟了
如果開啟就只要 toggle 就好
*/

const megaMenuTriggers = document.querySelectorAll(
  '.menu__item__link[data-mega-menu-trigger]'
);
megaMenuTriggers.forEach((item) =>
  item.addEventListener('click', (e) => {
    const currentMegaMenuName = e.target.dataset.megaMenuTrigger;
    const currentMegaMenu = document.querySelector(
      `.mega-menu[data-mega-menu-name=${currentMegaMenuName}]`
    );

    if (currentMegaMenu.classList.contains('is-active')) {
      toggleMegaMenu(currentMegaMenu);
      return;
    }

    closeAllMegaMenus();
    toggleMegaMenu(currentMegaMenu);
  })
);
