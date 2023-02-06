const container = document.querySelector(".hero-container")

const swiper = new Swiper('.hero__swiper', {
  speed: 300,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true
  }

});

document.addEventListener("DOMContentLoaded", function() {
  let acc = new Accordion('.questions__list', {
  duration: 700,
  elementClass: 'questions__item',
  triggerClass: 'questions__btn',
  panelClass: 'accordion__bottom',
  showMultiple: false,

    collapse: true
});
})

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header-nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',
    function () {

        burger.classList.toggle('burger--active');

        menu.classList.toggle('header-nav--active');

        document.body.classList.toggle('stop-scroll');
    })

 menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {
        burger.classList.remove('burger--active');

        menu.classList.remove('header-nav--active');

        document.body.classList.remove('stop-scroll');
    })
})


document.querySelector(".form-btn__open").addEventListener("click", function() {
  document.querySelector(".header_form").classList.add("form__active");
  this.classList.add("active");
})
document.querySelector(".form-close").addEventListener("click", function() {
   let form = document.querySelector(".header_form");
  form.classList.remove("form__active");
    form.querySelector("input").value = "";
    document.querySelector(".form-btn__open").classList.remove("active")
});

document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".header_form");
  if (!target.closest(".form-container")) {
  form.classList.remove("form__active");
    form.querySelector("input").value = "";
    document.querySelector(".form-btn__open").classList.remove("active")
  }
})

let tabsBtn = document.querySelectorAll('.work__item-step');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function(element){ element.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

