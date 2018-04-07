var link = document.querySelector(".popup-button");
var popup = document.querySelector(".modal");
var close = document.querySelector (".modal-close");
var form = popup.querySelector(".contact-us");
var username = popup.querySelector("[name=user-name]");
var email = popup.querySelector("[name=user-email]");
var message = popup.querySelector("[name=user-comment]");


link.addEventListener ("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  username.focus();
});

close.addEventListener ("click", function(evt){
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

form.addEventListener("submit", function(evt) {
  username.classList.remove("error");
  email.classList.remove("error");
  message.classList.remove("error");
  if(!username.value) {
    evt.preventDefault();
    username.classList.add("error");
    popup.classList.add("modal-error")
  }
  if(!email.value) {
    evt.preventDefault();
    email.classList.add("error");
    popup.classList.add("modal-error")
  }
  if(!message.value) {
    evt.preventDefault();
    message.classList.add("error");
    popup.classList.add("modal-error")
  }
});