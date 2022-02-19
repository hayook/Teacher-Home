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
    startBtn.id = 'startSessionBtn'; 
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

// const searchBtn = document.querySelector('i.mobile-search'); 
// const searchBox = document.querySelector('#search-box'); 
// let searchBoxDown = false; 

// searchBtn.addEventListener('click', function () {
//     if (!searchBoxDown) {
//         searchBox.classList.add('down');
//     } else {
//         searchBox.classList.remove('down');
//     }
//     searchBoxDown = !searchBoxDown; 
// });

// =============================================================================================================

const toggleBtn = document.querySelector('div.menu'); 
const toggleMenu = document.querySelector('#drop-down-menu');
let menuToggled = false; 

toggleBtn.addEventListener('click', function () {
    toggleBtn.classList.toggle('active');
    toggleMenu.classList.toggle('show');
    document.querySelector('.overlay').classList.toggle('show'); 
    document.querySelector('header').classList.toggle('fixed');
    if (!menuToggled) {
        toggleBtn.classList.add('header-fixed');
    } else {
        setTimeout(() => {
            toggleBtn.classList.remove('header-fixed');
        }, 300);
    }
    menuToggled = !menuToggled; 
}); 

// =============================================================================================================

const startSessionBtn = document.querySelectorAll('#startSessionBtn'); 
const startSessionPopup = document.querySelector('#startSessionPopup');
const startSessionClose = document.querySelector('#startSessionPopup button');

startSessionBtn.forEach(btn => {
    btn.addEventListener('click', function () {
        openPopup(startSessionPopup); 
        document.querySelector('.overlay').classList.add('active'); 
    });
})

startSessionClose.addEventListener('click', function () {
    closePopup(startSessionPopup);
    document.querySelector('.overlay').classList.remove('active'); 
})

document.querySelector('.overlay').addEventListener('click', function () {
    closePopup(startSessionPopup); // here its gonna take the opned model so i can apply this even on the toggle menu with just one function so its gonna take as a parametre the menu and it will close just the open modal
    this.classList.remove('active'); 
})

function openPopup(popup) {
    popup.classList.add('pop'); 
}

function closePopup(popup) {
    popup.classList.remove('pop');
}



// With WDS Video instade of a code for every pop i can write one code for all the popups using data attributes

// =============================================================================================================

const openSearchBox = document.querySelector('i.mobile-search'); 
const searchBox = document.querySelector('.search');
const closeSearchBox = document.querySelector('i.search-back');
const teacherProfile = document.querySelector('.profile');
const navigatePart = document.querySelector('header .navigate');
const searchInput = document.querySelector('.search input');

openSearchBox.addEventListener('click', function () {
    openSearch()
})

closeSearchBox.addEventListener('click', function () {
    closeSearch() 
})

function openSearch() {
    searchBox.classList.add('search-on')
    teacherProfile.classList.add('search-on')
    navigatePart.classList.add('search-on')
    searchInput.focus(); 
}

function closeSearch() {
    searchBox.classList.remove('search-on')
    teacherProfile.classList.remove('search-on')
    navigatePart.classList.remove('search-on')
}

// =============================================================================================================

notificationIcon = document.querySelector('i.notification-icon'); 
notificationDrop = document.querySelector('.notification-drop'); 

notificationIcon.addEventListener('click', function () {
    notificationDrop.classList.toggle('display'); 
})