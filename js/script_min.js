var feedback=document.querySelector(".feedback-button"),modal=document.querySelector(".modal"),close=modal.querySelector(".modal-close"),form=modal.querySelector(".modal-feedback"),selfPresentation=modal.querySelector("[name=my-name]"),post=modal.querySelector("[name=email]"),comment=modal.querySelector("[name=comment]"),isStorageSupport=!0,storageSelf="",storagePost="";try{storageSelf=localStorage.getItem("self"),storagePost=localStorage.getItem("post")}catch(e){isStorageSupport=!1}feedback.addEventListener("click",function(e){e.preventDefault(),modal.classList.add("modal-show"),storageSelf?(selfPresentation.value=storageSelf,post.focus()):selfPresentation.focus(),storagePost?(post.value=storagePost,comment.focus()):post.focus()}),close.addEventListener("click",function(e){e.preventDefault(),modal.classList.remove("modal-show"),modal.classList.remove("modal-error")}),form.addEventListener("submit",function(e){selfPresentation.value&&post.value&&(comment.value||"Напишите что-нибудь... "===comment.value)?isStorageSupport&&(localStorage.setItem("self",selfPresentation.value),localStorage.setItem("post",post.value)):(e.preventDefault(),console.log(" Заполните все поля формы перед отправкой! "),modal.classList.remove("modal-error"),modal.offsetWidth=modal.offsetWidth,modal.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),modal.classList.contains("modal-show")&&(modal.classList.remove("modal-show"),modal.classList.remove("modal-error")))});