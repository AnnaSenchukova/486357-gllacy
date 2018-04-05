var feedback = document.querySelector(".feedback-button");
var modal = document.querySelector(".modal");
var close = modal.querySelector(".modal-close");
var form = modal.querySelector(".modal-feedback");
var selfPresentation = modal.querySelector("[name=my-name]");
var post = modal.querySelector("[name=email]");
var comment = modal.querySelector("[name=comment]");

var isStorageSupport = true;
var storageSelf = "";
var storagePost = "";

try {
  storageSelf = localStorage.getItem("self");
  storagePost = localStorage.getItem("post");
} catch (err) {
  isStorageSupport = false;
};


feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");


  if (storageSelf) {
    selfPresentation.value = storageSelf;
    post.focus();
  } else {
    selfPresentation.focus();
  }

  if (storagePost) {
    post.value = storagePost;
    comment.focus();
  }
  else {
    post.focus();
  }

});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
  modal.classList.remove("modal-error");
});


form.addEventListener("submit", function (evt) {
  if (!selfPresentation.value || !post.value || !comment.value && comment.value !== ("Напишите что-нибудь... ") ) {
    evt.preventDefault();
    console.log(" Заполните все поля формы перед отправкой! ");
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("self", selfPresentation.value);
      localStorage.setItem("post", post.value);
    }
  }

});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal-show")) {
      modal.classList.remove("modal-show");
      modal.classList.remove("modal-error");
    }
  }
});
