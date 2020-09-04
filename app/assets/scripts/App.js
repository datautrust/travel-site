import '../styles/styles.css'
//alert("Hello this is just a testvvvv")
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll'


/* this worked when scrolling on featurs. but now we also want to scroll on testimonials */
   /*let revealOnScroll = new RevealOnScroll(); */
     new RevealOnScroll(document.querySelectorAll(".feature-item"),75);
/* testimonial has 3 items */     
     new RevealOnScroll(document.querySelectorAll(".testimonial"),60);

let mobileMenu = new MobileMenu();

if (module.hot) {
	module.hot.accept()
}

