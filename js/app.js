/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
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
// get all sections from the page  
const sections = document.querySelectorAll('section') ; 
// get item in navbar that have class name navbar__list to add items under
const navToadd = document.querySelector('#navbar__list') ; 

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

// build the navigation menu and  Scroll to section on link click 
//create one loop to do more than one action for best performance 
sections.forEach(sec => {
   // store section in variables  and  create  id for each elemet to use it on click action 
    const sectionLi =  `<li id=nav${sec.id} class='menu__link'><a href=#${sec.id}> ${sec.id}</a></li>` ;    
   // add section to navbar   
    navToadd.insertAdjacentHTML('beforeend', sectionLi);   

// create  an event listner while click on item scroll to same section into view    
    const el=  document.getElementById(`nav${sec.id}`); 
    el.addEventListener("click",(event)=>
        {
         const el2= document.getElementById(`${sec.id}`); 
         //prevent href action of <a> tag .
         event.preventDefault(); 
         // scroll to selected section 
         el2.scrollIntoView({behavior:'smooth',block:'center' })  ;
        });
});
 


// Add class 'active' to section when near top of viewport and  Set section is active in navigation bar
// add function active class while scrolling 
window.addEventListener('scroll', function addActiveClass() {
    // looping to all sections
    sections.forEach(sec => {
      //  return an element position relative to the viewport.
      const secBound= sec.getBoundingClientRect()  ;
      //const navMenu = document.querySelector (`#nav${sec.id}`) ;
      // clear section class
      sec.className="";
      //check position relative to the viewport
      if (secBound.top <=400 && secBound.top >=-150 )    
      {
      // adding active class to section
      sec.classList.add("your-active-class");
      // add blue color for navigated item
      sec.style.backgroundColor = "blue";
      // add highlight selected section in navbar 
      document.getElementById(`nav${sec.id}`).style.cssText = 'background: #333;color: #fff; transition: ease 0.3s all ' ;
      }
      else
      {    
      // remove active class to section
      sec.classList.remove("your-active-class");
      // remove blue color for navigated item
      sec.style.backgroundColor = "";
      // remove highlight to selected section in navbar
      document.getElementById(`nav${sec.id}`).style.backgroundColor = "";
      }
    })
    
}
) ;



// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
/* 
*/


// Set sections as active

