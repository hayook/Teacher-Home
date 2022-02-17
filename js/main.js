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

const dropDownIcon = document.querySelector('.profile i.more');
const dropDownMenu = document.querySelector('header .drop-down');
let dropDownShown = false;  

dropDownIcon.addEventListener('click', function () {
    if (!dropDownShown) {
        dropDownMenu.classList.add('show'); 
        dropDownShown = true; 
    } else {
        dropDownMenu.classList.remove('show'); 
        dropDownShown = false; 
    }
})

