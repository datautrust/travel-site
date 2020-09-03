class MobileMenu{
   constructor() {
// the followin code will work. reacts to when someone clicks on the menu button.
// but instructor says this is spaghetti code:
//     document.querySelector(".site-header__menu-icon").addEventListener("click",function() {
//	     console.log("The Top Right icon was clicked.");
	this.menuIcon = document.querySelector(".site-header__menu-icon");
	this.menuContent = document.querySelector(".site-header__menu-content");
      this.siteHeader = document.querySelector(".site-header")
	this.events(); 
	
     }
//Events	 
     events(){
	  this.menuIcon.addEventListener("click",() => this.toggleTheMenu())   ; 
     }


//Methods	
   toggleTheMenu() {
	 this.menuContent.classList.toggle("site-header__menu-content--is-visible");
	 this.siteHeader.classList.toggle("site-header--is-expanded");
	 this.menuIcon.classList.toggle("site-header__menu-icon--close-x");
	   
   }

}
export default MobileMenu;