let burger = document.querySelector('.combined-shape');
burger.addEventListener('click', function () {
  burger.classList.toggle('menu-click');
  document.querySelector('.burger-menu').classList.toggle('burger-menu-click');
  document.querySelector('.arrow').classList.toggle('arrow-click');
});
