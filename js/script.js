var link = document.querySelector(".write");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("contact-form");
var name = popup.querySelector("[name=contact-name]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");
var isStorageSupport = true;
var storage = "";
 try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  } 
        
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});
        
form.addEventListener("submit", function (evt) {
    if(!name.value) {
    evt.preventDefault();
    popup.classList.add("modal-error")
  }
  if(!email.value) {
    evt.preventDefault();
    popup.classList.add("modal-error")
  }
  if(!message.value) {
    evt.preventDefault();
    popup.classList.add("modal-error")
  }
});