class Modal {
   constructor() {
// the order matters here. we first want to inject our html
	this.injectHTML() 
	this.modal = document.querySelector(".modal")
	this.closeIcon = document.querySelector(".modal__close")
//due to sec 18.53, code splitting we no longer have to open the modal since we are doing it in app.js 
  //	this.openModalButtons = document.querySelectorAll(".open-modal") */
	this.events()
	   
	   
   }	
   
//events
	events() {
	   //listen for open click
// due to sec 18.53, code splitting we don't the below here since we are doing it in app.js 
	//  this.openModalButtons.forEach(el => el.addEventListener("click",e => this.openTheModal(e))) 
	   
	   
         // listen for close click
	   this.closeIcon.addEventListener("click", () => this.closeTheModal())
	   // pushes any keys to close,but we want to look for the esc key
	   document.addEventListener("keyup",e =>this.keyPressHandler(e))
		
	}
	
//methods
   keyPressHandler(e) {
	if (e.keyCode == 27) {
		this.closeTheModal();
		
		
	}   
   }
   
// due to sec 18.53, code splitting we  modify below here since we are doing it in app.js 
/*   openTheModal(e) {
	   e.preventDefault()
	   this.modal.classList.add("modal--is-visible")
       }
the new model code is   */

	openTheModal() {
	   this.modal.classList.add("modal--is-visible")
       }
	 
   closeTheModal(){
	  this.modal.classList.remove("modal--is-visible") 
	   
   }

   injectHTML() {
	document.body.insertAdjacentHTML('beforeend',`
	 <div class="modal">
    <div class="modal__inner">
      <h2 class="section-title section-title--blue section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon"> Get in <strong>Touch</strong></h2>
      <div class="wrapper wrapper--narrow">
        <p class="modal__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>
      </div>

      <div class="social-icons">
        <a href="#" class="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>
        <a href="#" class="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>
        <a href="#" class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>
        <a href="#" class="social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>
      </div>
    </div>
    <div class="modal__close">X</div>
  </div>
	`)   
	   
   }
	
	
}
export default Modal
