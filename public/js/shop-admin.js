let modalContent = document.querySelector(".modal-content");
let openModal = document.querySelector(".open-modal");
let closeModal = document.querySelector(".close-modal");
let blurBg = document.querySelector(".blur-bg");

openModal.addEventListener("click", function () {
  modalContent.classList.remove("hidden-modal");
  blurBg.classList.remove("hidden-blur");
});

let closeModalFunction = function () {
  modalContent.classList.add("hidden-modal")
  blurBg.classList.add("hidden-blur")
}

blurBg.addEventListener("click", closeModalFunction);
closeModal.addEventListener("click", closeModalFunction);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape"
     && !modalContent.classList.contains("hidden")
    ) {
      closeModalFunction();
    }
});


let modalContent1 = document.querySelector(".modal-content1");
let openModal1 = document.querySelector(".open-modal1");
let closeModal1 = document.querySelector(".close-modal1");
let blurBg1 = document.querySelector(".blur-bg1");

openModal.addEventListener("click", function () {
  modalContent.classList.remove("hidden-modal1");
  blurBg.classList.remove("hidden-blur1");
});

let closeModalFunction1 = function () {
  modalContent.classList.add("hidden-modal1")
  blurBg.classList.add("hidden-blur1")
}

blurBg.addEventListener("click", closeModalFunction1);
closeModal.addEventListener("click", closeModalFunction1);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape"
     && !modalContent.classList.contains("hidden")
    ) {
      closeModalFunction1();
    }
});



document.addEventListener('DOMContentLoaded', function() {
  var deleteButtons = document.getElementsByClassName('delete-btn');

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', function() {
      var shopitem = this.parentNode;
      shopitem.parentNode.remove();
    });
  }
});
