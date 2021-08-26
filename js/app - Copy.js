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

const sections = document.querySelectorAll('section') ; 
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

// build the navigation menu

sections.forEach(sec => {

     const sectionLi =  `<li id=nav${sec.id} class='menu__link'><a href=#${sec.id} > ${sec.id}</a></li>` ;    
     
    navToadd.insertAdjacentHTML('beforeend', sectionLi);   

    const el=  document.getElementById(`nav${sec.id}`); 
    
    el.addEventListener("click",(event)=>
        {
         const el2= document.getElementById(`${sec.id}`); 
         event.preventDefault(); 
         el2.scrollIntoView({behavior:'smooth',block:'center' })  ;
        });
});
/*
for (const sec of sections)
{    
    const sectionLi =  `<li id=nav${sec.id} class='menu__link'><a href=#${sec.id} > ${sec.id}</a></li>` ;    
     
    navToadd.insertAdjacentHTML('beforeend', sectionLi);   

    const el=  document.getElementById(`nav${sec.id}`); 
    
    el.addEventListener("click",(event)=>
        {
         const el2= document.getElementById(`${sec.id}`); 
         event.preventDefault(); 
         el2.scrollIntoView({behavior:'smooth',block:'center' })  ;
        });
}*/



// Add class 'active' to section when near top of viewport 

window.addEventListener('scroll', function addActiveClass() {

    for (const sec of sections)
    {
      const secBound= sec.getBoundingClientRect()  ;
      const navMenu = document.querySelector (`#nav${sec.id}`) ;
      sec.className="";
      //console.log(`#nav${sec.id}`);      
      if (secBound.top <=400 && secBound.top >=-150 )    
      {
      sec.classList.add("your-active-class");
      sec.style.backgroundColor = "blue";

      document.getElementById(`nav${sec.id}`).style.cssText = 'background: #333;color: #fff; transition: ease 0.3s all ' ;
      }
      else
      {    
      sec.classList.remove("your-active-class");
      sec.style.backgroundColor = "";
      document.getElementById(`nav${sec.id}`).style.backgroundColor = "";
      }
    }
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
const navLinks = document.getElementsByClassName ('menu__link') ;
    navLinks.forEach((el) => {
        el.addEventListener("click",()=>
        {
         console.log("el.id");     
        });
 });
*/


// Set sections as active

