var link = document.querySelector(".button-adress");

var popup = document.querySelector(".modal");

var close = popup.querySelector(".button-close");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
