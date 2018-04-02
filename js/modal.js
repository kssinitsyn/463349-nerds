var link = document.querySelector(".button-adress");

var popup = document.querySelector(".modal");

var close = popup.querySelector(".button-close");

var login = popup.querySelector("[name=login]");

var email = popup.querySelector("[name=email]");

var textMessage = popup.querySelector("[name=textMessage]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    email.value = storage;
  }

  login.focus();
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

// form.addEventListener("submit", function (evt) {
//   if (!login.value || !email.value || !textMessage.value) {
//     evt.preventDefault();
//     console.log("Нужно ввести логин и пароль");
//   } else {
//     if (isStorageSupport) {
//       localStorage.setItem("email", email.value);
//     }
//   }
// });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  });