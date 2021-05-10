/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * 
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
//sections global variable
const sections = document.querySelectorAll('section');
//navigation global variable
const navMenu = document.getElementById('navbar__list')

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const listItems = () => {
    //looping on all sections
    for (sec of sections) {
        secName = sec.getAttribute('data-nav');
        secLink = sec.getAttribute('id');
        listItem = document.createElement('li');
        listItem.innerHTML = `<a class='menu__link' href='#${secLink}'>${secName}</a>`;
        navMenu.appendChild(listItem);
    };

};
listItems()


// Add class 'active' to section when near top of viewport
const position = (sec) =>{
    return Math.floor(sec.getBoundingClientRect().top);
};
//remove active class
const removeActive = (sec) => {
    sec.classList.remove('your-active-class');
};
//adding the active class
const addActive = (conditional, sec) => {
    if(conditional){
        sec.classList.add('your-active-class')
    };
};
const sectionActive = () => {
    sections.forEach(sec=>{
        const elementOffset = position(sec);
        inviewport = () => elementOffset<100 && elementOffset>=-100;
        removeActive(sec)
        addActive(inviewport(),sec);
            });
        };

//add event scrolling
document.addEventListener('scroll',sectionActive);


// Scroll to anchor ID using scrollTO event
const scrolling = ()=> {
   const links = document.querySelectorAll('.navbar__menu a');
   links.forEach(link => {
       link.addEventListener('click', () => {
           for(i = 0 ; i<sections ; i++) {
               sections[i].addEventListener('click' , sectionScroll(link));
           }
       });
   });
};
    
scrolling();

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



