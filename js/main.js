const scheduleCont = document.querySelector('.schedule-container'); 

let sessionsCont = document.createElement('div'); 
sessionsCont.className = 'sessions'; 
scheduleCont.appendChild(sessionsCont); 

for (let i = 0; i < 40; i++) {
    let session = document.createElement('div'); 
    session.className = 'cell'; 

    let funcitonalities = document.createElement('div'); 
    funcitonalities.className = 'functionalities';

    let startBtn = document.createElement('a'); 
    startBtn.className = 'start'; 
    startBtn.href = '#'; 
    startIcon = document.createElement('i'); 
    startIcon.className = 'fas fa-play'; 
    startBtn.appendChild(startIcon);

    let removeBtn = document.createElement('a'); 
    removeBtn.className = 'remove'; 
    removeBtn.href = '#'; 
    removeIcon = document.createElement('i'); 
    removeIcon.className = 'fas fa-trash'; 
    removeBtn.appendChild(removeIcon);

    let editBtn = document.createElement('a'); 
    editBtn.className = 'edit'; 
    editBtn.href = '#'; 
    editIcon = document.createElement('i'); 
    editIcon.className = 'fas fa-pen'; 
    editBtn.appendChild(editIcon);

    funcitonalities.appendChild(startBtn); 
    funcitonalities.appendChild(removeBtn); 
    funcitonalities.appendChild(editBtn); 

    session.appendChild(document.createTextNode('3M1')); 
    session.appendChild(funcitonalities); 

    sessionsCont.appendChild(session); 
}

// =============================================================================================================

const dropBtn = document.querySelector('#drop-menu-btn'); 
const dropMenu = document.querySelector('#drop-down-menu'); 
let menuDroped = false; 

dropBtn.addEventListener('click', function () {
    if (!menuDroped) {
        dropMenu.classList.add('display'); 
    } else {
        dropMenu.classList.remove('display');
    }
    menuDroped = !menuDroped;
})

// =============================================================================================================

const themeToggleBtn = document.querySelector('header #toggle-theme'); 
let darkTheme = getComputedStyle(document.querySelector(':root')).getPropertyValue('$dark-theme'); 

console.log(darkTheme);

if (darkTheme == 'true') {
    themeToggleBtn.classList.add('switched');
} else {
    themeToggleBtn.classList.remove('switched');
}



themeToggleBtn.addEventListener('click', function () {
    if (darkTheme == 'true') {
        themeToggleBtn.classList.remove('switched');
        document.documentElement.style.setProperty('--dark-theme', 'false');
        darkTheme = 'false'; 
    } else {
        themeToggleBtn.classList.add('switched');
        document.documentElement.style.setProperty('--dark-theme', 'true');
        darkTheme = 'true'; 
    }
});

// =============================================================================================================

const searchBtn = document.querySelector('i.mobile-search'); 
const searchBox = document.querySelector('#search-box'); 
let searchBoxDown = false; 

searchBtn.addEventListener('click', function () {
    if (!searchBoxDown) {
        searchBox.classList.add('down');
    } else {
        searchBox.classList.remove('down');
    }
    searchBoxDown = !searchBoxDown; 
});

// =============================================================================================================

const toggleBtn = document.querySelector('i.mobile-menu'); 
const toggleMenu = document.querySelector('#drop-down-menu');
const closeMenu = document.querySelector('i.close');
let menuToggled = false; 

toggleBtn.addEventListener('click', function () {
    if (!menuToggled) {
        toggleMenu.classList.add('show');
        document.querySelector('.overlay').classList.add('show');
    } else {
        toggleMenu.classList.remove('show');
        document.querySelector('.overlay').classList.remove('show')
    }
    menuToggled = !menuToggled; 
});

closeMenu.addEventListener('click', function () {
    if (menuToggled === true) {
        toggleBtn.click();
    }
})
