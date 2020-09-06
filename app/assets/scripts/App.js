import '../styles/styles.css'
//alert("Hello this is just a testvvvv")
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
// remove: import Modal from './modules/Modal'
// remove: new Modal()

//sec 18.53: since we won't use the varialbe stickyHeader,the don't need to make it a var: 
//"let stickyHeader = new StickyHeader();
new StickyHeader();
/* this worked when scrolling on featurs. but now we also want to scroll on testimonials */
   /*let revealOnScroll = new RevealOnScroll(); */
     new RevealOnScroll(document.querySelectorAll(".feature-item"),75);
/* testimonial has 3 items */     
     new RevealOnScroll(document.querySelectorAll(".testimonial"),60);

// again we don't need mobileMenu as a variable    "let mobileMenu = new MobileMenu();"
new MobileMenu();
let modal

// section 18.53 code splitting modal
document.querySelectorAll(".open-modal").forEach(el => {
		el.addEventListener("click",e => {
			e.preventDefault()
		      if (typeof modal =="undefined") {
	// the import below will show up as 0.bundle.js in dev tools/network. to alter name do:
	// add the comment and webpack name 
		      	import(/*webpackChunkName: "modal-JL" */'./modules/Modal').then( x => {
				   modal = new x.default()
	//			   setTimeout( () =>  modal.openTheModal(),20 )
				
			      }).catch( () => console.log("in importing modal code. There is a problem"))
		       } else {
			    modal.openTheModal()
			
        		}
		})
} )

if (module.hot) {
	module.hot.accept()
}

