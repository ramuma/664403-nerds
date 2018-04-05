var link = document.querySelector(".write");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("contact-form");
var name = popup.querySelector("[name=contact-name]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");
        
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    name.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});
        
form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value || !message.value) {
          evt.preventDefault();
          popup.classList.remove("modal-error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("modal-error");
        } 
        else {
          popUp.classList.remove("modal-show");
          popUp.classList.remove("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
          }
        }
});
      