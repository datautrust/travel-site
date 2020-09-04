/* section 15.46... using lodash for performance */
import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';


class RevealOnScroll{
// Constructors
   constructor(els,thresholdPercent) {
/*sec 15-47;to scroll features and testimonials*/
/*     	this.itemsToReveal = document.querySelectorAll(".feature-item") */ 
      this.thresholdPercent = thresholdPercent
      this.itemsToReveal = els; 
	this.browserHeight = window.innerHeight;
	this.hideInitially();
	this.scrollThrottle = throttle(this.calcCaller,200).bind(this);
	this.events();
	
	   
	   
   }

//Events
    events() {
	window.addEventListener("scroll",this.scrollThrottle) ;
      window.addEventListener("resize",debounce( () =>{
		console.log("Resize just ran")
		this.browserHeight = window.innerHeight;
	},333))	
	    
    }
//Methods
   calcCaller() {
	console.log("Scroll function ran");
	  this.itemsToReveal.forEach(el => {
		if (el.isRevealed == false) {
			  this.calculateIfScrolledTo(el);
		}
	  })   
	   
   }


   calculateIfScrolledTo(el){
	  
        if (window.scrollY + this.browserHeight > el.offsetTop) {
		console.log("element was calculated");
            /* notice our first time is Rect */
            /* example:	   console.log(el.getBoundingClientRect().y)  */
            let scrollPercent = (el.getBoundingClientRect().y/this.browserHeight ) * 100;
            if (scrollPercent < this.thresholdPercent) {
		    el.classList.add("reveal-item--is-visible");
		    el.isRevealed = true;
		    if (el.isLastItem) {
			   window.removeEventListener("scroll",this.scrollThrottle);
			 
	    	     }
		 
	       }
	  	  
	  }
   }

   hideInitially(){
	this.itemsToReveal.forEach( el => {
	el.classList.add("reveal-item")
	el.isRevealed = false;
	}) 
	   this.itemsToReveal[this.itemsToReveal.length -1].isLastItem=true ;
		
	   }	
}
export default RevealOnScroll;