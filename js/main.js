document.querySelector('.burger').addEventListener('click', function () {
  const burger = document.querySelector('.burger');
  burger.classList.add('burger-animate');

  burger.addEventListener(
    'animationend',
    function () {
      burger.classList.remove('burger-animate');
    },
    { once: true }
  );
});

document.querySelector('.overlay').addEventListener('click', function () {
  const burger = document.querySelector('.burger');
  burger.classList.add('burger-animate');

  burger.addEventListener(
    'animationend',
    function () {
      burger.classList.remove('burger-animate');
    },
    { once: true }
  );
});

$(function () {
  $('.burger, .overlay').on('click', function () {
    $('.header__right').toggleClass('header__right--active');
    $('.overlay').toggleClass('overlay--show');
  });

  setInterval(() => {
    if (
      $(window).scrollTop() > 0 &&
      $('.header__right').hasClass('header__right--active') == false
    ) {
      $('.burger').addClass('burger--follow');
    } else {
      $('.burger').removeClass('burger--follow');
    }
  }, 0);
});

$(function () {
  //modal-1
  $('.get-card__btn--call').on('click', function () {
    $('.modal').toggleClass('modal--open');
  });

  $('.modal__close').on('click', function (e) {
    e.preventDefault();
    $('.modal').removeClass('modal--open');
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      $('.modal').removeClass('modal--open');
    }
  });

  //modal-2
  $('.evaluations__btn ').on('click', function () {
    $('.modal-feedback').toggleClass('modal-feedback--open');
  });

  $('.modal-feedback__close').on('click', function (e) {
    e.preventDefault();
    $('.modal-feedback').removeClass('modal-feedback--open');
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      $('.modal-feedback').removeClass('modal-feedback--open');
    }
  });

  //modal-3
  $('.bank-card__button:first-child, .reviews__btn').on('click', function () {
    $('.modal-response').toggleClass('modal-response--open');
  });

  $('.modal-response__close').on('click', function (e) {
    e.preventDefault();
    $('.modal-response').removeClass('modal-response--open');
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      $('.modal-response').removeClass('modal-response--open');
    }
  });

  //section-open
  $('.card__reviews').on('click', function (e) {
    e.preventDefault();
    $('.main__content').toggleClass('main__content--active');
    $('.all-reviews').toggleClass('all-reviews--active');
  });
  $('.all-reviews__title-link').on('click', function (e) {
    e.preventDefault();
    $('.main__content').addClass('main__content--active');
    $('.all-reviews').removeClass('all-reviews--active');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const submitButton = document.getElementById('modal__button');
  const inputName = document.getElementById('modal__form-name');
  const inputTel = document.getElementById('modal__form-tel');
  const checkbox = document.getElementById('modal__form-checkbox');

  function checkFormValidity() {
    const isNameFilled = inputName.value.trim() !== '';
    const isTelFilled = inputTel.value.trim() !== '';
    const isCheckboxChecked = checkbox.checked;
    submitButton.disabled = !(isNameFilled && isTelFilled && isCheckboxChecked);
  }
  inputName.addEventListener('input', checkFormValidity);
  inputTel.addEventListener('input', checkFormValidity);
  checkbox.addEventListener('change', checkFormValidity);
  checkFormValidity();
});

document.addEventListener('DOMContentLoaded', function () {
  const submitButton = document.getElementById('write-us__button');
  const inputName = document.getElementById('write-us__form-name');
  const inputTel = document.getElementById('write-us__form-tel');
  const inputEmail = document.getElementById('write-us__form-mail');
  const inputComment = document.getElementById('write-us__form-comment');
  const checkbox = document.getElementById('write-us__form-checkbox');

  function checkFormValidity() {
    const isNameFilled = inputName.value.trim() !== '';
    const isTelFilled = inputTel.value.trim() !== '';
    const isCommentFilled = inputComment.value.trim() !== '';
    const isEmailFilled = inputEmail.value.trim() !== '';
    const isCheckboxChecked = checkbox.checked;
    submitButton.disabled = !(
      isNameFilled &&
      isTelFilled &&
      isCheckboxChecked &&
      isCommentFilled &&
      isEmailFilled
    );
  }
  inputName.addEventListener('input', checkFormValidity);
  inputEmail.addEventListener('input', checkFormValidity);
  inputComment.addEventListener('input', checkFormValidity);
  inputTel.addEventListener('input', checkFormValidity);
  checkbox.addEventListener('change', checkFormValidity);
  checkFormValidity();
});

document.addEventListener('DOMContentLoaded', function () {
  const submitButton = document.getElementById('modal-feedback__btn');
  const inputName = document.getElementById('modal-feedback__name');
  const inputComment = document.getElementById('modal-feedback__comment');
  const inputFile = document.getElementById('modal-feedback__download');

  function checkFormValidity() {
    const isNameFilled = inputName.value.trim() !== '';
    const isCommentFilled = inputComment.value.trim() !== '';
    const isFileSelected = inputFile.files.length > 0;

    // Кнопка активна, если оба поля и файл заполнены
    submitButton.disabled = !(
      isNameFilled &&
      isCommentFilled &&
      isFileSelected
    );
  }

  // Добавляем обработчики событий на поля ввода и выбор файла
  inputName.addEventListener('input', checkFormValidity);
  inputComment.addEventListener('input', checkFormValidity);
  inputFile.addEventListener('change', checkFormValidity);

  // Проверяем состояние кнопки при загрузке страницы
  checkFormValidity();
});

document.addEventListener('DOMContentLoaded', function () {
  const submitButton = document.getElementById('modal-response__btn');
  const inputName = document.getElementById('modal-response__name');
  const inputComment = document.getElementById('modal-response__comment');
  const checkbox = document.getElementById('modal-response__politics-input');

  function checkFormValidity() {
    const isNameFilled = inputName.value.trim() !== '';
    const isCommentFilled = inputComment.value.trim() !== '';
    const isCheckboxChecked = checkbox.checked;
    submitButton.disabled = !(
      isNameFilled &&
      isCommentFilled &&
      isCheckboxChecked
    );
  }
  inputName.addEventListener('input', checkFormValidity);
  inputComment.addEventListener('input', checkFormValidity);
  checkbox.addEventListener('change', checkFormValidity);
  checkFormValidity();
});

//tabs

const tabs = document.querySelectorAll('.card-info__tabs-btn');
const all_content = document.querySelectorAll('.card-info__tabs-content');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabs.forEach((tab) => {
      tab.classList.remove('card-info__tabs-btn--active');
    });
    tab.classList.add('card-info__tabs-btn--active');
    all_content.forEach((content) => {
      content.classList.remove('card-info__tabs-content--active');
    });
    all_content[index].classList.add('card-info__tabs-content--active');
  });
});

const tabs2 = document.querySelectorAll('.seek__tabs-btn');
const all_content2 = document.querySelectorAll('.seek__tabs-content');

tabs2.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabs2.forEach((tab) => {
      tab.classList.remove('seek__tabs-btn--active');
    });
    tab.classList.add('seek__tabs-btn--active');
    all_content2.forEach((content) => {
      content.classList.remove('seek__tabs-content--active');
    });
    all_content2[index].classList.add('seek__tabs-content--active');
  });
});

const tabs3 = document.querySelectorAll('.offer__tabs-btn');
const all_content3 = document.querySelectorAll('.offer__tabs-content');

tabs3.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabs3.forEach((tab) => {
      tab.classList.remove('offer__tabs-btn--active');
    });
    tab.classList.add('offer__tabs-btn--active');
    all_content3.forEach((content) => {
      content.classList.remove('offer__tabs-content--active');
    });
    all_content3[index].classList.add('offer__tabs-content--active');
  });
});

const tabs4 = document.querySelectorAll('.popular-offers__tabs-btn ');
const all_content4 = document.querySelectorAll('.tabs-item');

tabs4.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabs4.forEach((tab) => {
      tab.classList.remove('popular-offers__tabs-btn--active');
    });
    tab.classList.add('popular-offers__tabs-btn--active');
    all_content4.forEach((content) => {
      content.classList.remove('tabs-item--active');
    });
    all_content4[index].classList.add('tabs-item--active');
  });
});

const tabs5 = document.querySelectorAll('.reviews__tabs-btn');
const all_content5 = document.querySelectorAll('.reviews__tabs-item');

tabs5.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabs5.forEach((tab) => {
      tab.classList.remove('reviews__tabs-btn--active');
    });
    tab.classList.add('reviews__tabs-btn--active');
    all_content5.forEach((content) => {
      content.classList.remove('reviews__tabs-item--active');
    });
    all_content5[index].classList.add('reviews__tabs-item--active');
  });
});

const tabs6 = document.querySelectorAll('.recommendations__tabs-btn');
const all_content6 = document.querySelectorAll('.recommendations__tabs-item');

tabs6.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabs6.forEach((tab) => {
      tab.classList.remove('recommendations__tabs-btn--active');
    });
    tab.classList.add('recommendations__tabs-btn--active');
    all_content6.forEach((content) => {
      content.classList.remove('recommendations__tabs-item--active');
    });
    all_content6[index].classList.add('recommendations__tabs-item--active');
  });
});

const tabs7 = document.querySelectorAll('.best-offers__tabs-btn');
const all_content7 = document.querySelectorAll('.best-offers__tabs-content');

tabs7.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabs7.forEach((tab) => {
      tab.classList.remove('best-offers__tabs-btn--active');
    });
    tab.classList.add('best-offers__tabs-btn--active');
    all_content7.forEach((content) => {
      content.classList.remove('best-offers__tabs-content--active');
    });
    all_content7[index].classList.add('best-offers__tabs-content--active');
  });
});

const tabs8 = document.querySelectorAll('.questions__tabs-btn ');
const all_content8 = document.querySelectorAll('.tabs-item');

tabs8.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabs8.forEach((tab) => {
      tab.classList.remove('questions__tabs-btn--active');
    });
    tab.classList.add('questions__tabs-btn--active');
    all_content8.forEach((content) => {
      content.classList.remove('tabs-item--active');
    });
    all_content8[index].classList.add('tabs-item--active');
  });
});

//cards__body

$(document).ready(function () {
  function initializeSlick() {
    if ($(window).width() < 800) {
      if (!$('.cards__body').hasClass('slick-initialized')) {
        $('.cards__body').slick({
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
          dots: false,
          responsive: [
            {
              breakpoint: 601,
              settings: {
                slidesToShow: 1.1,
                draggable: true,
              },
            },
            {
              breakpoint: 801,
              settings: {
                slidesToShow: 2.1,
                draggable: true,
              },
            },
          ],
        });
      }
    } else {
      if ($('.cards__body').hasClass('slick-initialized')) {
        $('.cards__body').slick('unslick');
      }
    }
  }

  initializeSlick();

  $(window).resize(function () {
    initializeSlick();
  });
});

//news

$(document).ready(function () {
  function initializeSlick() {
    if ($(window).width() < 1001) {
      if (!$('.news__cards').hasClass('slick-initialized')) {
        $('.news__cards').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
          dots: false,
          responsive: [
            {
              breakpoint: 330,
              settings: {
                slidesToShow: 1.07,
                draggable: true,
              },
            },
            {
              breakpoint: 380,
              settings: {
                slidesToShow: 1.1,
                draggable: true,
              },
            },
            {
              breakpoint: 444,
              settings: {
                slidesToShow: 1.3,
                draggable: true,
              },
            },
            {
              breakpoint: 525,
              settings: {
                slidesToShow: 1.5,
                draggable: true,
              },
            },
            {
              breakpoint: 580,
              settings: {
                slidesToShow: 1.8,
                draggable: true,
              },
            },
            {
              breakpoint: 605,
              settings: {
                slidesToShow: 2,
                draggable: true,
              },
            },
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 2.1,
                draggable: true,
              },
            },
            {
              breakpoint: 720,
              settings: {
                slidesToShow: 2.2,
                draggable: true,
              },
            },
            {
              breakpoint: 870,
              settings: {
                slidesToShow: 2.5,
                draggable: true,
              },
            },
          ],
        });
      }
    } else {
      if ($('.news__cards').hasClass('slick-initialized')) {
        $('.news__cards').slick('unslick');
      }
    }
  }

  initializeSlick();

  $(window).resize(function () {
    initializeSlick();
  });
});

$(document).ready(function () {
  function initializeSlick() {
    if ($(window).width() < 501) {
      if (!$('.post__cards').hasClass('slick-initialized')) {
        $('.post__cards').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
          dots: false,
          responsive: [
            {
              breakpoint: 501,
              settings: {
                slidesToShow: 1.1,
                draggable: true,
              },
            },
          ],
        });
      }
    } else {
      if ($('.post__cards').hasClass('slick-initialized')) {
        $('.post__cards').slick('unslick');
      }
    }
  }

  initializeSlick();

  $(window).resize(function () {
    initializeSlick();
  });
});

//questions

$(document).ready(function () {
  function initializeSlick() {
    if ($(window).width() < 801) {
      if (!$('.questions__cards').hasClass('slick-initialized')) {
        $('.questions__cards').slick({
          slidesToShow: 2.5,
          slidesToScroll: 2,
          infinite: false,
          arrows: false,
          dots: false,
          responsive: [
            {
              breakpoint: 330,
              settings: {
                slidesToShow: 1.07,
                slidesToScroll: 1,
                draggable: true,
              },
            },
            {
              breakpoint: 380,
              settings: {
                slidesToShow: 1.1,
                slidesToScroll: 1,
                draggable: true,
              },
            },
            {
              breakpoint: 444,
              settings: {
                slidesToShow: 1.3,
                slidesToScroll: 1,
                draggable: true,
              },
            },
            {
              breakpoint: 525,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
                draggable: true,
              },
            },
            {
              breakpoint: 580,
              settings: {
                slidesToShow: 1.8,
                slidesToScroll: 1,
                draggable: true,
              },
            },
            {
              breakpoint: 605,
              settings: {
                slidesToShow: 2,
                draggable: true,
              },
            },
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 2.1,
                draggable: true,
              },
            },
            {
              breakpoint: 720,
              settings: {
                slidesToShow: 2.2,
                draggable: true,
              },
            },
          ],
        });
      }
    } else {
      if ($('.questions__cards').hasClass('slick-initialized')) {
        $('.questions__cards').slick('unslick');
      }
    }
  }

  initializeSlick();

  $(window).resize(function () {
    initializeSlick();
  });
});

//protection

$(document).ready(function () {
  function initializeSlick() {
    if ($(window).width() < 1201) {
      if (!$('.protection__cards').hasClass('slick-initialized')) {
        $('.protection__cards').slick({
          slidesToShow: 2.5,
          slidesToScroll: 2,
          infinite: false,
          arrows: false,
          dots: false,
          responsive: [
            {
              breakpoint: 360,
              settings: {
                slidesToShow: 1.1,
                slidesToScroll: 1,
                draggable: true,
              },
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1.3,
                slidesToScroll: 1,
                draggable: true,
              },
            },
            {
              breakpoint: 530,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
                draggable: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2.1,
                draggable: true,
              },
            },
            {
              breakpoint: 720,
              settings: {
                slidesToShow: 2.2,
                draggable: true,
              },
            },
          ],
        });
      }
    } else {
      if ($('.protection__cards').hasClass('slick-initialized')) {
        $('.protection__cards').slick('unslick');
      }
    }
  }

  initializeSlick();

  $(window).resize(function () {
    initializeSlick();
  });
});

//sliders

$(function () {
  $('.offers__slider').slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    responsive: [
      {
        breakpoint: 451,
        settings: {
          slidesToShow: 1.03,
          draggable: true,
        },
      },
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 2.05,
          draggable: true,
        },
      },

      {
        breakpoint: 1001,
        settings: {
          slidesToShow: 3.06,
          draggable: true,
        },
      },
    ],
  });

  $('.offers__slider-btn--prev').on('click', function (e) {
    e.preventDefault();
    $('.offers__slider').slick('slickPrev');
  });
  $('.offers__slider-btn--next').on('click', function (e) {
    e.preventDefault();
    $('.offers__slider').slick('slickNext');
  });
});

$(function () {
  $('.reviews__slider').slick({
    arrows: false,
    slidesToShow: 2,
    infinite: true,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 451,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1.02,
          draggable: true,
        },
      },
      {
        breakpoint: 801,
        settings: {
          slidesToShow: 2.015,
          draggable: true,
        },
      },
    ],
  });

  $('.reviews__arrow--prev').on('click', function (e) {
    e.preventDefault();
    $('.reviews__slider').slick('slickPrev');
  });
  $('.reviews__arrow--next').on('click', function (e) {
    e.preventDefault();
    $('.reviews__slider').slick('slickNext');
  });
});

$(function () {
  $('.experts__slider').slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    responsive: [
      {
        breakpoint: 451,
        settings: {
          slidesToShow: 1.03,
          draggable: true,
        },
      },
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 2.05,
          draggable: true,
        },
      },

      {
        breakpoint: 1001,
        settings: {
          slidesToShow: 3.06,
          draggable: true,
        },
      },
    ],
  });

  $('.experts__arrow--prev').on('click', function (e) {
    e.preventDefault();
    $('.experts__slider').slick('slickPrev');
  });
  $('.experts__arrow--next').on('click', function (e) {
    e.preventDefault();
    $('.experts__slider').slick('slickNext');
  });
});

$(function () {
  $('.current-offers__slider').slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll:2,
    infinite: true,
    responsive: [
      {
        breakpoint: 451,
        settings: {
          slidesToShow: 1.03,
          slidesToScroll:1,
          draggable: true,
        },
      },
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 2.05,
          draggable: true,
        },
      },

      {
        breakpoint: 1032,
        settings: {
          slidesToShow: 3,
          draggable: true,
        },
      },
    ],
  });

  $('.current-offers__slider-arrow--prev').on('click', function (e) {
    e.preventDefault();
    $('.current-offers__slider').slick('slickPrev');
  });
  $('.current-offers__slider-arrow--next').on('click', function (e) {
    e.preventDefault();
    $('.current-offers__slider').slick('slickNext');
  });
});

$(function () {
  $('.interesting-offers__slider').slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll:2,
    infinite: true,
    responsive: [
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1.03,
          slidesToScroll:1,
          draggable: true,
        },
      },
      {
        breakpoint: 675,
        settings: {
          slidesToShow: 2.05,
          draggable: true,
        },
      },

      {
        breakpoint: 1032,
        settings: {
          slidesToShow: 3,
          draggable: true,
        },
      },
    ],
  });
});

$(function () {
  $('.history-mobile__slider').slick({
    arrows: false,
    slidesToShow: 2.5,
    slidesToScroll: 2,
    infinite: false,
    responsive: [
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1.06,
          draggable: true,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
          draggable: true,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1.5,
          draggable: true,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1.8,
          draggable: true,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 2,
          draggable: true,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2.2,
          draggable: true,
        },
      },
      {
        breakpoint: 801,
        settings: {
          slidesToShow: 2.5,
          draggable: true,
        },
      },
    ],
  });
});

$(function () {
  $('.dropdown__select').on('click', function () {
    $('.dropdown__menu').toggleClass('dropdown__menu--active');
  });
  $('.dropdown__item').on('click', function () {
    $('.dropdown__menu').removeClass('dropdown__menu--active');
  });

  $(document).click(function (event) {
    if (!$(event.target).closest('.dropdown__select').length) {
      $('.dropdown__menu').removeClass('dropdown__menu--active');
    }
  });

  $('.seek-mobile__dropdown-select').on('click', function () {
    $('.seek-mobile__dropdown-menu').toggleClass(
      'seek-mobile__dropdown-menu--active'
    );
  });
  $('.seek-mobile__dropdown__item').on('click', function () {
    $('.seek-mobile__dropdown-menu').removeClass(
      'seek-mobile__dropdown-menu--active'
    );
  });

  $(document).click(function (event) {
    if (!$(event.target).closest('.seek-mobile__dropdown-select').length) {
      $('.seek-mobile__dropdown-menu').removeClass(
        'seek-mobile__dropdown-menu--active'
      );
    }
  });

  $('.best-offers-mobile__dropdown-select').on('click', function () {
    $('.best-offers-mobile__dropdown-menu').toggleClass(
      'best-offers-mobile__dropdown-menu--active'
    );
  });
  $('.best-offers-mobile__dropdown__item').on('click', function () {
    $('.best-offers-mobile__dropdown-menu').removeClass(
      'best-offers-mobile__dropdown-menu--active'
    );
  });

  $(document).click(function (event) {
    if (
      !$(event.target).closest('.best-offers-mobile__dropdown-select').length
    ) {
      $('.best-offers-mobile__dropdown-menu').removeClass(
        'best-offers-mobile__dropdown-menu--active'
      );
    }
  });

  $('.recommendations-mobile__dropdown-select').on('click', function () {
    $('.recommendations-mobile__dropdown-menu').toggleClass(
      'recommendations-mobile__dropdown-menu--active'
    );
  });
  $('.recommendations-mobile__dropdown__item').on('click', function () {
    $('.recommendations-mobile__dropdown-menu').removeClass(
      'recommendations-mobile__dropdown-menu--active'
    );
  });

  $(document).click(function (event) {
    if (
      !$(event.target).closest('.recommendations-mobile__dropdown-select')
        .length
    ) {
      $('.recommendations-mobile__dropdown-menu').removeClass(
        'recommendations-mobile__dropdown-menu--active'
      );
    }
  });

  $('.reviews__review-more ').on('click', function () {
    $('.reviews__review-more').addClass('reviews__review-more--none');
    $('.reviews__review-text ').addClass('reviews__review-text--all');
    $('.reviews__review-nomore').addClass('reviews__review-nomore--none');
  });

  $('.reviews__review-nomore').on('click', function () {
    $('.reviews__review-more').removeClass('reviews__review-more--none');
    $('.reviews__review-text ').removeClass('reviews__review-text--all');
    $('.reviews__review-nomore').removeClass('reviews__review-nomore--none');
  });

  $('.reviews__review-comments').on('click', function () {
    $('.reviews__review-write').slideToggle();
  });

  $(document).ready(function () {
    $('.card-mobile__acc-link').on('click', function (event) {
      event.preventDefault();
      var $body = $(this).next('.card-mobile__acc-body');
      var $head = $(this).find('.card-mobile__acc-head');
      var isActive = $body.is(':visible');
      $('.card-mobile__acc-body').slideUp();
      $('.card-mobile__acc-link').removeClass('card-mobile__acc-link--active');
      $('.card-mobile__acc-head').removeClass('card-mobile__acc-head--active');
      if (!isActive) {
        $body.slideDown();
        $(this).addClass('card-mobile__acc-link--active');
        $head.addClass('card-mobile__acc-head--active');
      }
    });
  });

  $(document).ready(function () {
    $('.popular-offers--mobile__acc-link').on('click', function (event) {
      event.preventDefault();
      var $body = $(this).next('.popular-offers--mobile__acc-body');
      var $head = $(this).find('.popular-offers--mobile__acc-head');
      var isActive = $body.is(':visible');
      $('.popular-offers--mobile__acc-body').slideUp();
      $('.popular-offers--mobile__acc-link').removeClass(
        'popular-offers--mobile__acc-link--active'
      );
      $('.popular-offers--mobile__acc-head').removeClass(
        'popular-offers--mobile__acc-head--active'
      );
      if (!isActive) {
        $body.slideDown();
        $(this).addClass('popular-offers--mobile__acc-link--active');
        $head.addClass('popular-offers--mobile__acc-head--active');
      }
    });
  });

  $('.faq__acc-link').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('faq__acc-link--active')) {
      $(this).removeClass('faq__acc-link--active');
      $(this).children('.faq__acc-text').slideUp();
    } else {
      $('.faq__acc-link').removeClass('faq__acc-link--active');
      $('.faq__acc-text').slideUp();
      $(this).addClass('faq__acc-link--active');
      $(this).children('.faq__acc-text').slideDown();
    }
  });
});

//offer__row
$(document).ready(function () {
  function initializeSlick() {
    if ($(window).width() < 800) {
      if (!$('.offer__row').hasClass('slick-initialized')) {
        $('.offer__row').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
          dots: false,
          responsive: [
            {
              breakpoint: 401,
              settings: {
                slidesToShow: 1.4,
                draggable: true,
              },
            },
            {
              breakpoint: 551,
              settings: {
                slidesToShow: 2.15,
                draggable: true,
              },
            },
            {
              breakpoint: 801,
              settings: {
                slidesToShow: 3.06,
                draggable: true,
              },
            },
          ],
        });
      }
    } else {
      if ($('.offer__row').hasClass('slick-initialized')) {
        $('.offer__row').slick('unslick');
      }
    }
  }

  initializeSlick();

  $(window).resize(function () {
    initializeSlick();
  });
});

//bank-card__tegs
$(document).ready(function () {
  function initializeSlick() {
    if ($(window).width() < 801) {
      if (!$('.bank-card__tegs').hasClass('slick-initialized')) {
        $('.bank-card__tegs').slick({
          slidesToShow: 1,
          slidesToScroll: 5,
          infinite: false,
          arrows: false,
          dots: false,
          responsive: [
            {
              breakpoint: 501,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 601,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              },
            },
            {
              breakpoint: 801,
              settings: {
                slidesToScroll: 5,
                slidesToShow: 5,
                draggable: true,
              },
            },
          ],
        });
      }
    } else {
      if ($('.bank-card__tegs').hasClass('slick-initialized')) {
        $('.bank-card__tegs').slick('unslick');
      }
    }
  }

  initializeSlick();

  $(window).resize(function () {
    initializeSlick();
  });
});

//best-offers
$(document).ready(function () {
  function initializeSlick() {
    if ($(window).width() < 1001) {
      if (!$('.best-offers__cards-bank').hasClass('slick-initialized')) {
        $('.best-offers__cards-bank').slick({
          slidesToShow: 3.5,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
          dots: false,
          responsive: [
            {
              breakpoint: 901,
              settings: {
                slidesToScroll: 1,
                slidesToShow: 3.2,
              },
            },
            {
              breakpoint: 801,
              settings: {
                slidesToScroll: 2,
                slidesToShow: 2.8,
              },
            },
            {
              breakpoint: 701,
              settings: {
                slidesToScroll: 2,
                slidesToShow: 2.5,
              },
            },
            {
              breakpoint: 610,
              settings: {
                slidesToScroll: 2,
                slidesToShow: 2.2,
              },
            },
            {
              breakpoint: 541,
              settings: {
                slidesToScroll: 2,
                slidesToShow: 1.9,
              },
            },
            {
              breakpoint: 470,
              settings: {
                slidesToScroll: 1,
                slidesToShow: 1.6,
              },
            },
            {
              breakpoint: 470,
              settings: {
                slidesToScroll: 1,
                slidesToShow: 1.6,
              },
            },
            {
              breakpoint: 400,
              settings: {
                slidesToScroll: 1,
                slidesToShow: 1.3,
              },
            },
            {
              breakpoint: 360,
              settings: {
                slidesToScroll: 1,
                slidesToShow: 1.2,
              },
            },
            {
              breakpoint: 340,
              settings: {
                slidesToScroll: 1,
                slidesToShow: 1.1,
              },
            },
          ],
        });
      }
    } else {
      if ($('.best-offers__cards-bank').hasClass('slick-initialized')) {
        $('.best-offers__cards-bank').slick('unslick');
      }
    }
  }

  initializeSlick();

  $(window).resize(function () {
    initializeSlick();
  });
});

//smooth-scrolling
$('.bank-card__reviews').on('click', function (e) {
  e.preventDefault();
  var id = $(this).attr('href'),
    top = $(id).offset().top - 100;
  $('body,html').animate({ scrollTop: top }, 800);
});

$('.more-btn').on('click', function () {
  $('.info-bank--mobile__text').addClass('info-bank--mobile__text--active');
  $('.more-btn').removeClass('more-btn--active');
  $('.less-btn').addClass('less-btn--active');
});

$('.less-btn').on('click', function () {
  $('.info-bank--mobile__text').removeClass('info-bank--mobile__text--active');
  $('.less-btn').removeClass('less-btn--active');
  $('.more-btn').addClass('more-btn--active');
});

$('.more-btn__list').on('click', function () {
  $('.info-bank--mobile__list-box').addClass(
    'info-bank--mobile__list-box--active'
  );
  $('.more-btn__list').removeClass('more-btn__list--active');
  $('.less-btn__list').addClass('less-btn__list--active');
});

$('.less-btn__list').on('click', function () {
  $('.info-bank--mobile__list-box').removeClass(
    'info-bank--mobile__list-box--active'
  );
  $('.less-btn__list').removeClass('less-btn__list--active');
  $('.more-btn__list').addClass('more-btn__list--active');
});

$(document).ready(function () {
  function checkFields() {
    let name = $('#comment__form-name').val().trim();
    let comment = $('#comment__form-comment').val().trim();

    // Если оба поля заполнены
    if (name !== '' && comment !== '') {
      $('.comment__form-bottom').addClass('visible'); // Добавляем класс visible для показа контейнера
    } else {
      $('.comment__form-bottom').removeClass('visible'); // Убираем класс visible для скрытия контейнера
    }
  }

  // Отслеживание изменений в полях
  $('#comment__form-name, #comment__form-comment').on('input', function () {
    checkFields();
  });
});

//comments
$(document).ready(function () {
  $('.comment__user-comments').on('click', function () {
    var userBlock = $(this).closest('.comment__user');
    var userBottom = userBlock.find('.comment__user-bottom');
    userBlock.find('.comment__user-answers').slideToggle();
    userBottom.toggleClass('hide-before');
  });
});

//aside dropdown

$('.aside__title, .aside__arrow').on('click', function () {
  $('.aside__items').toggleClass('aside__items--active');
  $('.aside__arrow').toggleClass('aside__arrow--inverted');
});

$(document).click(function (event) {
  if (!$(event.target).closest('.articles-specific__aside').length) {
    $('.aside__items').removeClass('aside__items--active');
    $('.aside__arrow').removeClass('aside__arrow--inverted');
  }
});

//Swiper feedback
let swiperInstance;

function initializeSwiper() {
  const swiperElement = document.querySelector('.feedback__tegs');
  if (window.innerWidth >= 1000) {
    if (!swiperInstance) {
      swiperInstance = new Swiper(swiperElement, {
        slidesPerView: 'auto',
        spaceBetween: 20,
        freeMode: true,
        loop: false,
        breakpoints: {
          1000: {
            spaceBetween: 30,
          },
          800: {
            spaceBetween: 20,
          },
        },
      });
    }
  } else {
    if (swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }
  }
}

document.addEventListener('DOMContentLoaded', initializeSwiper);
window.addEventListener('resize', initializeSwiper);

//Swiper top-categories--mobile
const swiperCategories = new Swiper('.top-categories--mobile__cards.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 24,
  freeMode: true,
  loop: false,
  breakpoints: {
     900: {
      slidesPerView: 4,
    },
     670: {
      slidesPerView: 3,
    },
     444: {
      slidesPerView: 2,
    },
     200: {
      slidesPerView: 1.4,
    },
  },
});

//Swiper recommendations
const tabsContainer = document.querySelector('.recommendations__tabs');
tabsContainer.classList.add('swiper-container');

const buttons = tabsContainer.querySelectorAll('.recommendations__tabs-btn');
buttons.forEach((button) => {
  const slideWrapper = document.createElement('div');
  slideWrapper.classList.add('swiper-slide');
  button.parentNode.insertBefore(slideWrapper, button);
  slideWrapper.appendChild(button);
});

const wrapper = document.createElement('div');
wrapper.classList.add('swiper-wrapper');

while (tabsContainer.firstChild) {
  wrapper.appendChild(tabsContainer.firstChild);
}

tabsContainer.appendChild(wrapper);

const swiper = new Swiper('.recommendations__tabs.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 39,
  freeMode: true,
  loop: false,
  breakpoints: {
    1100: {
      slidesPerView: 'auto',
    },
    1000: {
      spaceBetween: 30,
    },
    800: {
      spaceBetween: 20,
    },
  },
});



const tegsContainer = document.querySelector('.recommendations__tegs');
tegsContainer.classList.add('swiper-container');

const tegs = tegsContainer.querySelectorAll('.recommendations__teg');
tegs.forEach((teg) => {
  const slideWrapper = document.createElement('div');
  slideWrapper.classList.add('swiper-slide');
  teg.parentNode.insertBefore(slideWrapper, teg);
  slideWrapper.appendChild(teg);
});

const tegsWrapper = document.createElement('div');
tegsWrapper.classList.add('swiper-wrapper');

while (tegsContainer.firstChild) {
  tegsWrapper.appendChild(tegsContainer.firstChild);
}

tegsContainer.appendChild(tegsWrapper);


const swiperTegs = new Swiper('.recommendations__tegs.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  freeMode: true,
  loop: false,
  breakpoints: {},
});