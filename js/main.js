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
/// Search Box 

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
/// Drop Down

const btns = document.querySelectorAll('.btn')
const drops = document.querySelectorAll('.drop')


window.onclick = function ({target}) {
    btns.forEach(btn => {
        if (!target.matches(`#${btn.id}`)) {
            if (!target.matches(btn.dataset.modal) && !document.querySelector(btn.dataset.modal).contains(target)) {
                document.querySelector(btn.dataset.modal).classList.remove('active');
            }
        } else {
            let droped = document.querySelector(btn.dataset.modal).classList.contains('active');

            if (!droped) {
                document.querySelector(btn.dataset.modal).classList.add('active');
            } else {
                document.querySelector(btn.dataset.modal).classList.remove('active');
            }
        }
    })
}


// =============================================================================================================
/// Mobile Toggle Menu

const toggleBtn = document.querySelector('div.menu'); 
const toggleMenu = document.querySelector('#drop-down-menu');
let menuToggled = false; 

toggleBtn.addEventListener('click', function () {
    toggleBtn.classList.toggle('active');
    toggleMenu.classList.toggle('show');
    document.querySelector('.overlay').classList.toggle('mobile-show'); 
    document.querySelector('header').classList.toggle('fixed');
    if (!menuToggled) {
        toggleBtn.classList.add('header-fixed');
    } else {
        setTimeout(() => {
            toggleBtn.classList.remove('header-fixed');
        }, 400);
    }
    menuToggled = !menuToggled; 
}); 



// =============================================================================================================
/// Start Session Popup

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

    toggleBtn.classList.remove('active'); 
    toggleMenu.classList.remove('show'); 
    this.classList.remove('mobile-show'); 
    document.querySelector('header').classList.remove('fixed');
    setTimeout(() => {
        toggleBtn.classList.remove('header-fixed');
    }, 400);
    menuToggled = false; 
})

function openPopup(popup) {
    popup.classList.add('pop'); 
}

function closePopup(popup) {
    popup.classList.remove('pop');
}