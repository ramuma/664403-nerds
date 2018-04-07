var link = document.querySelector(".write");
var popup = document.querySelector(".modal");
var close = document.querySelector (".modal-close");
var form = popup.querySelector(".contact-form");
var name = popup.querySelector("[name = contact-name]");
var email = popup.querySelector("[name = email]");
var message = popup.querySelector("[name = message]");


var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("name");
  } catch (err) {
    isStorageSupport = false;
  }
  
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    
    if (storage) {
      name.value = storage;
      email.focus();
    } else {
      name.focus();
    }
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
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name", name.value);
      }
    }
  });

  form.addEventListener("submit", function(evt) {
  name.classList.remove("error");
  email.classList.remove("error");
  message.classList.remove("error");
  if(!name.value) {
    evt.preventDefault();
    name.classList.add("error");
  }
  if(!email.value) {
    evt.preventDefault();
    email.classList.add("error");
  }
  if(!message.value) {
    evt.preventDefault();
    message.classList.add("error");
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