let menuControl = false;

function showMenu() {
    var icon = document.querySelector('header .logo .button-menu i')
    var menu = document.querySelector('header nav ul')

    if(!menuControl) {
        icon.classList.remove('fa-bars')
        icon.classList.add('fa-times')

        menu.style.display = 'flex';
        menu.classList.add('menu-animation')
        menuControl = true;
    }else {
        icon.classList.remove('fa-times')
        icon.classList.add('fa-bars')

        menuControl = false;
        menu.style.display = 'none';
    }
}

function openModal(idModal) {
    document.querySelector(`.projetos .modal#${idModal}`).style.display = 'flex'
}

function closeModal(idModal) {
    document.querySelector(`.projetos .modal#${idModal}`).style.display = 'none'
}