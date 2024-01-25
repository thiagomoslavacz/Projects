function openMenu() {
    var menuWindow = document.getElementById('menu-window-active');
    var menuBackground = document.querySelector('.menu-background');
    var body = document.body;

    menuWindow.classList.toggle('menu-window-active');

    var menuIsActive = menuWindow.classList.contains('menu-window-active');

    body.classList.toggle('body-scroll-lock', menuIsActive);

    menuWindow.style.display = menuIsActive ? 'block' : 'none';

    if (menuIsActive) {
        menuBackground.addEventListener('click', closeMenu);
    } else {
        menuBackground.removeEventListener('click', closeMenu);
    }
}

function closeMenu() {
    openMenu();
}
