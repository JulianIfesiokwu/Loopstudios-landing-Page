const hamburgerMenu = document.querySelector('.nav--hamburger');
const closeNavBtn = document.querySelector('.nav--close');
const navList = document.querySelector('.nav__list');

// functions
function showNavList() {
    hamburgerMenu.style.display = 'none';
    navList.style.display = 'flex';
    closeNavBtn.style.display = 'block';    
}

function closeNavList() {
    hamburgerMenu.style.display = 'block';
    navList.style.display = 'none';
    closeNavBtn.style.display = 'none';
}


//event listeners
hamburgerMenu.addEventListener('click', showNavList);
closeNavBtn.addEventListener('click', closeNavList);