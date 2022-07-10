let button = document.querySelector(".button");
let popup = document.querySelector(".popup");
let popupClose = document.querySelector(".popup__submit-btn_action_close");

button.addEventListener("click", function () {
  popup.classList.add("popup_opened");
});

popupClose.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
});

document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove("popup_opened");
  }
});

popup.addEventListener("click", function () {
  if (event.target === event.currentTarget) {
    popup.classList.remove("popup_opened");
  }
});
