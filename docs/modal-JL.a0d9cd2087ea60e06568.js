(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{17:function(e,s,n){"use strict";function i(e,s){for(var n=0;n<s.length;n++){var i=s[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.r(s);var o=function(){function e(){!function(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}(this,e),this.injectHTML(),this.modal=document.querySelector(".modal"),this.closeIcon=document.querySelector(".modal__close"),this.events()}var s,n,o;return s=e,(n=[{key:"events",value:function(){var e=this;this.closeIcon.addEventListener("click",(function(){return e.closeTheModal()})),document.addEventListener("keyup",(function(s){return e.keyPressHandler(s)}))}},{key:"keyPressHandler",value:function(e){27==e.keyCode&&this.closeTheModal()}},{key:"openTheModal",value:function(){this.modal.classList.add("modal--is-visible")}},{key:"closeTheModal",value:function(){this.modal.classList.remove("modal--is-visible")}},{key:"injectHTML",value:function(){document.body.insertAdjacentHTML("beforeend",'\n\t <div class="modal">\n    <div class="modal__inner">\n      <h2 class="section-title section-title--blue section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon"> Get in <strong>Touch</strong></h2>\n      <div class="wrapper wrapper--narrow">\n        <p class="modal__description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>\n      </div>\n\n      <div class="social-icons">\n        <a href="#" class="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>\n        <a href="#" class="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>\n        <a href="#" class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>\n        <a href="#" class="social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>\n      </div>\n    </div>\n    <div class="modal__close">X</div>\n  </div>\n\t')}}])&&i(s.prototype,n),o&&i(s,o),e}();s.default=o}}]);