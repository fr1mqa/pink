var pageHeader = document.querySelector('.page-header');
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navToggle.addEventListener('click', function() {

    if (navMain.classList.contains('main-nav__closed')) {
        navMain.classList.remove('main-nav__closed');
        navMain.classList.add('main-nav__opened');
        pageHeader.classList.add('page-header--full');
    } else {
        navMain.classList.add('main-nav__closed');
        navMain.classList.remove('main-nav__opened');
        pageHeader.classList.remove('page-header--full');
    }
});
