let modalLink = document.querySelector(".map__btn"); // кнопка напишите нам
let modal = document.querySelector(".modal-inner"); // модальное окно c формой
let overlay = document.querySelector(".modal-inner-overlay") // слой оверлей
let close = document.querySelector(".close-modal"); //крестик закрыть форму
let inputName = document.querySelector(".name-input"); // Инпут имя
let inputMail = document.querySelector(".mail-input"); // Инпут почта
let form =  document.querySelector(".modal__form"); // форма

//Показывает модальное окно и оверлей
modalLink.addEventListener("click", function (evt){
    evt.preventDefault();
    modal.classList.add("scale-anim");
    overlay.classList.add("modal-show");
    inputName.focus();
})

//Скрывает модальное окно и оверлей по крестику
close.addEventListener("click", function (evt){
    evt.preventDefault();
    modal.classList.remove("scale-anim");
    overlay.classList.remove("modal-show");
});

//Скрывает модальное окно и оверлей по оверлею
overlay.addEventListener("click", function (evt){
    evt.preventDefault();
    modal.classList.remove("scale-anim");
    overlay.classList.remove("modal-show");
});

//Проверка заполнения формы
form.addEventListener("submit", function (evt) {
    if(!inputName.value){
        evt.preventDefault();
        form.classList.add("shake");
        inputName.classList.add("invalid-text-input");
    } if(!inputMail.value){
        evt.preventDefault();
        form.classList.add("shake");
        inputMail.classList.add("invalid-text-input");
    }
});

