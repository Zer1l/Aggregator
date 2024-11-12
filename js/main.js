document.addEventListener('DOMContentLoaded', function () {
  const dropdownSelect = document.querySelector(
    '.modal-advantage__dropdown-select'
  );
  const dropdownMenu = document.querySelector(
    '.modal-advantage__dropdown-menu'
  );
  const caret = document.querySelector('.modal-advantage__dropdown-caret');
  const dropdownItems = document.querySelectorAll(
    '.modal-advantage__dropdown-item'
  );
  const dropdownElements = document.querySelectorAll(
    '.modal-advantage__dropdown-element'
  );
  const dropdownSelected = document.querySelector(
    '.modal-advantage__dropdown-selected'
  );

  // Показать/скрыть меню
  dropdownSelect.addEventListener('click', function () {
    dropdownMenu.classList.toggle('modal-advantage__dropdown-menu--active');
    caret.classList.toggle('modal-advantage__dropdown-caret--rotate');
  });

  // Переключение активного элемента, контента и текста
  dropdownItems.forEach((item, index) => {
    item.addEventListener('click', function () {
      // Удалить активный класс с всех элементов
      dropdownItems.forEach((item) =>
        item.classList.remove('modal-advantage__dropdown-item--active')
      );
      dropdownElements.forEach((element) =>
        element.classList.remove('modal-advantage__dropdown-element--active')
      );

      // Добавить активный класс на выбранный элемент
      item.classList.add('modal-advantage__dropdown-item--active');
      dropdownElements[index].classList.add(
        'modal-advantage__dropdown-element--active'
      );

      // Обновить текст в .modal-advantage__dropdown-selected
      dropdownSelected.textContent = item.textContent;

      // Закрыть меню
      dropdownMenu.classList.remove('modal-advantage__dropdown-menu--active');
      caret.classList.remove('modal-advantage__dropdown-caret--rotate');
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const content = document.querySelector('.content');
  const itemsPerPage = 9;
  let currentPage = 0;
  const items = Array.from(content.querySelectorAll('tbody tr'));
  const paginationContainer = document.querySelector(
    '.without-visiting__inner .pagination'
  );

  function showPage(page) {
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    items.forEach((item, index) => {
      item.classList.toggle('hidden', index < startIndex || index >= endIndex);
    });
    updateActiveButtonStates();
  }

  function createPageButtons() {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    paginationContainer.innerHTML = '';
    for (let i = 0; i < totalPages; i++) {
      const pageButton = document.createElement('button');
      pageButton.textContent = i + 1;
      pageButton.addEventListener('click', () => {
        currentPage = i;
        showPage(currentPage);
      });
      paginationContainer.appendChild(pageButton);
    }
    updateActiveButtonStates();
  }

  function updateActiveButtonStates() {
    const pageButtons = paginationContainer.querySelectorAll('button');
    pageButtons.forEach((button, index) => {
      if (index === currentPage) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }

  createPageButtons();
  showPage(currentPage);
});

document.addEventListener('DOMContentLoaded', function () {
  const creditRows = document.querySelector('.all-credit__rows');
  const creditItemsPerPage = 12; // Количество элементов на странице
  let creditCurrentPage = 0;
  const creditItems = Array.from(
    creditRows.querySelectorAll('.all-credit__row')
  );
  const creditPaginationContainer = document.querySelector(
    '.all-credit__pagination'
  ); // Используем уже существующий класс .pagination

  function showCreditPage(page) {
    const startIndex = page * creditItemsPerPage;
    const endIndex = startIndex + creditItemsPerPage;

    // Показываем только элементы на текущей странице, остальные скрываем
    creditItems.forEach((item, index) => {
      if (index >= startIndex && index < endIndex) {
        item.classList.remove('hidden'); // Убираем класс hidden с видимых элементов
      } else {
        item.classList.add('hidden'); // Добавляем класс hidden к скрытым элементам
      }
    });

    // Обновляем состояние активных кнопок пагинации
    updateCreditActiveButtonStates();
  }

  function createCreditPageButtons() {
    const totalCreditPages = Math.ceil(creditItems.length / creditItemsPerPage);
    creditPaginationContainer.innerHTML = '';
    for (let i = 0; i < totalCreditPages; i++) {
      const creditPageButton = document.createElement('button');
      creditPageButton.textContent = i + 1;

      // Добавляем обработчик нажатия на кнопку
      creditPageButton.addEventListener('click', () => {
        creditCurrentPage = i; // Устанавливаем текущую страницу
        showCreditPage(creditCurrentPage); // Показываем элементы для этой страницы
      });

      creditPaginationContainer.appendChild(creditPageButton);
    }

    // Обновляем активные состояния для первой страницы
    updateCreditActiveButtonStates();
  }

  function updateCreditActiveButtonStates() {
    const creditPageButtons =
      creditPaginationContainer.querySelectorAll('button');

    // Пробегаем по кнопкам и добавляем/убираем класс active
    creditPageButtons.forEach((button, index) => {
      if (index === creditCurrentPage) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }

  // Создаем кнопки пагинации и отображаем первую страницу
  createCreditPageButtons();
  showCreditPage(creditCurrentPage);
});

$('.all-credit__pagination').on('click', function (e) {
  e.preventDefault();
  var id = document.querySelector('.sorting-loans__all-credit'),
    top = $(id).offset().top - 100;
  $('body,html').animate({ scrollTop: top }, 800);
});

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
  $('.evaluations__btn, .banner__btn ').on('click', function () {
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

  //modal-4
  $(
    '.all-credit__row-btn.button--white, .all-credit__row-btn.button--empty, .top-offers__card-infobtn '
  ).on('click', function () {
    $('.modal-advantage').toggleClass('modal-advantage--open');
  });

  $('.modal-advantage__close').on('click', function (e) {
    e.preventDefault();
    $('.modal-advantage').removeClass('modal-advantage--open');
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      $('.modal-advantage').removeClass('modal-advantage--open');
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

const tabs9 = document.querySelectorAll('.modal-advantage__tabs-btn');
const all_content9 = document.querySelectorAll(
  '.modal-advantage__tabs-content'
);

tabs9.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabs9.forEach((tab) => {
      tab.classList.remove('modal-advantage__tabs-btn--active');
    });
    tab.classList.add('modal-advantage__tabs-btn--active');
    all_content9.forEach((content) => {
      content.classList.remove('modal-advantage__tabs-content--active');
    });
    all_content9[index].classList.add('modal-advantage__tabs-content--active');
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
    slidesToScroll: 2,
    infinite: true,
    responsive: [
      {
        breakpoint: 551,
        settings: {
          slidesToShow: 1.03,
          slidesToScroll: 1,
          draggable: true,
        },
      },
      {
        breakpoint: 771,
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
  $('.current-offers2__slider').slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: true,
    responsive: [
      {
        breakpoint: 551,
        settings: {
          slidesToShow: 1.03,
          slidesToScroll: 1,
          draggable: true,
        },
      },
      {
        breakpoint: 771,
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

  $('.current-offers2__slider-arrow--prev').on('click', function (e) {
    e.preventDefault();
    $('.current-offers2__slider').slick('slickPrev');
  });
  $('.current-offers2__slider-arrow--next').on('click', function (e) {
    e.preventDefault();
    $('.current-offers2__slider').slick('slickNext');
  });
});

$(function () {
  $('.interesting-offers__slider').slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: true,
    responsive: [
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1.03,
          slidesToScroll: 1,
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

  $('.without-visiting--mobile__dropdown-select').on('click', function () {
    $('.without-visiting--mobile__dropdown-menu').toggleClass(
      'without-visiting--mobile__dropdown-menu--active'
    );
  });
  $('.without-visiting--mobile__dropdown__item').on('click', function () {
    $('.without-visiting--mobile__dropdown-menu').removeClass(
      'without-visiting--mobile__dropdown-menu--active'
    );
  });

  $(document).click(function (event) {
    if (
      !$(event.target).closest('.without-visiting--mobile__dropdown-select')
        .length
    ) {
      $('.without-visiting--mobile__dropdown-menu').removeClass(
        'without-visiting--mobile__dropdown-menu--active'
      );
    }
  });

  $('.sorting__dropdown-select').on('click', function () {
    $('.sorting__dropdown-menu').toggleClass('sorting__dropdown-menu--active');
  });
  $('.sorting__dropdown__item').on('click', function () {
    $('.sorting__dropdown-menu').removeClass('sorting__dropdown-menu--active');
  });

  $(document).click(function (event) {
    if (!$(event.target).closest('.sorting__dropdown-select').length) {
      $('.sorting__dropdown-menu').removeClass(
        'sorting__dropdown-menu--active'
      );
    }
  });

  $('.sorting-loans__body-dropdown-select').on('click', function (e) {
    e.stopPropagation();
    $('.sorting-loans__body-dropdown-menu')
      .not($(this).next())
      .removeClass('sorting-loans__body-dropdown-menu--active');

    $(this)
      .next('.sorting-loans__body-dropdown-menu')
      .toggleClass('sorting-loans__body-dropdown-menu--active');
  });

  $('.sorting-loans__body-dropdown-item').on('click', function () {
    $(this)
      .closest('.sorting-loans__body-dropdown-menu')
      .removeClass('sorting-loans__body-dropdown-menu--active');
  });

  $(document).on('click', function (event) {
    if (!$(event.target).closest('.sorting-loans__body-dropdown').length) {
      $('.sorting-loans__body-dropdown-menu').removeClass(
        'sorting-loans__body-dropdown-menu--active'
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

  const SubTegs = document.querySelectorAll(
    '.sorting-loans__body-subparameter'
  );

  SubTegs.forEach((button) => {
    button.addEventListener('click', function () {
      // Переключаем класс на нажатой кнопке
      this.classList.toggle('sorting-loans__body-subparameter--active');
    });
  });

  const Tegs = document.querySelectorAll('.banks-in__search-teg');

  Tegs.forEach((button) => {
    button.addEventListener('click', function () {
      // Переключаем класс на нажатой кнопке
      this.classList.toggle('banks-in__search-teg--active');
    });
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

const inputs = Array.from(document.querySelectorAll('.evaluations__input'));

inputs.forEach(function (input) {
  let isChecked = false;

  input.addEventListener('click', function (e) {
    if (isChecked) {
      input.checked = false;
      isChecked = false;
    } else {
      isChecked = true;
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const reviewsContainer = document.querySelector('.reviews__body');
  const reviewItems = Array.from(reviewsContainer.children);
  const ratingInputs = document.querySelectorAll('.evaluations__input');

  // Функция для получения оценки отзыва
  function getReviewRating(review) {
    const emptyStars = review.querySelectorAll('.reviews__review-star--empty');
    return 5 - emptyStars.length; // Оценка равна 5 минус количество пустых звезд
  }

  // Функция для сортировки отзывов по оценке
  function sortReviews() {
    const selectedRating =
      Array.from(ratingInputs).findIndex((input) => input.checked) + 1;

    // Если ничего не выбрано, просто вернемся
    if (selectedRating === 0) return;

    // Фильтрация и сортировка отзывов
    const filteredReviews = reviewItems.filter((review) => {
      const reviewRating = getReviewRating(review);
      switch (selectedRating) {
        case 5:
          return reviewRating === 1; // 1 звезд
        case 4:
          return reviewRating === 2; // 2 звезды
        case 3:
          return reviewRating === 3; // 3 звезды
        case 2:
          return reviewRating === 4; // 4 звезды
        case 1:
          return reviewRating === 5; // 5 звезда
        default:
          return false; // Если что-то пошло не так
      }
    });

    // Удаляем все отзывы и добавляем отфильтрованные
    reviewsContainer.innerHTML = '';
    filteredReviews.forEach((review) => {
      reviewsContainer.appendChild(review);
    });
  }

  // Обработчик события для инпутов
  ratingInputs.forEach((input) => {
    input.addEventListener('change', sortReviews);
  });
});

$(document).ready(function () {
  // Функция для сортировки отзывов
  function sortReviews(isDescending) {
    var $reviews = $('.reviews__review');

    // Сортируем отзывы по дате
    $reviews.sort(function (a, b) {
      var dateA = $(a).find('.reviews__review-date').text().split('.');
      var dateB = $(b).find('.reviews__review-date').text().split('.');

      var parsedDateA = new Date(dateA[2], dateA[1] - 1, dateA[0]);
      var parsedDateB = new Date(dateB[2], dateB[1] - 1, dateB[0]);

      return isDescending
        ? parsedDateB - parsedDateA
        : parsedDateA - parsedDateB;
    });

    // Обновляем порядок элементов на странице
    $('.reviews__body').html($reviews);
  }

  // Установка обработчиков событий
  function setEventHandlers() {
    // Обработчик для кнопки "больше"
    $('.reviews__review-more')
      .off('click')
      .on('click', function () {
        $(this).addClass('reviews__review-more--none');
        $(this)
          .siblings('.reviews__review-text')
          .addClass('reviews__review-text--all');
        $(this)
          .siblings('.reviews__review-nomore')
          .addClass('reviews__review-nomore--none');
      });

    // Обработчик для кнопки "больше не показывать"
    $('.reviews__review-nomore')
      .off('click')
      .on('click', function () {
        $(this)
          .siblings('.reviews__review-more')
          .removeClass('reviews__review-more--none');
        $(this)
          .siblings('.reviews__review-text')
          .removeClass('reviews__review-text--all');
        $(this).removeClass('reviews__review-nomore--none');
      });

    // Обработчик для показа/скрытия комментариев
    $('.reviews__review-comments')
      .off('click')
      .on('click', function () {
        var $currentForm = $(this)
          .closest('.reviews__review')
          .find('.reviews__review-write');

        // Если текущая форма видима, просто сворачиваем её
        if ($currentForm.is(':visible')) {
          $currentForm.slideUp();
        } else {
          // Закрываем все остальные формы
          $('.reviews__review-write').slideUp();

          // Открываем только текущую форму
          $currentForm.stop(true, true).slideDown();
        }
      });
  }

  // Изначально сортируем по новизне
  var isDescending = true;
  sortReviews(isDescending);

  // Обработка клика по элементу сортировки
  $('.sorting__time').on('click', function () {
    isDescending = !isDescending;
    sortReviews(isDescending);

    // Меняем текст кнопки, сохраняя SVG
    $(this)
      .contents()
      .filter(function () {
        return this.nodeType === Node.TEXT_NODE;
      })
      .first()
      .replaceWith(isDescending ? 'Старые' : 'Новые');

    // Сбрасываем состояние обработчиков
    setEventHandlers();
  });

  // Устанавливаем обработчики событий при первой загрузке
  setEventHandlers();
});

$(document).ready(function () {
  $('.sorting-loans__body-parameters').on('click', function () {
    $('.sorting-loans__body-toggle').slideToggle();
  });
});

// Обработчик клика по элементам меню
$('.without-visiting--mobile__dropdown-item').on('click', function () {
  let sortType = $(this).text().trim();

  // Удаляем активный класс у всех пунктов меню
  $('.without-visiting--mobile__dropdown-item').removeClass(
    'without-visiting--mobile__dropdown-item--active'
  );

  // Добавляем активный класс к выбранному элементу
  $(this).addClass('without-visiting--mobile__dropdown-item--active');

  // Применяем сортировку на основе выбранного элемента
  sortItems(sortType);
});

// Обработчик клика по элементам меню
$('.without-visiting--mobile__dropdown-item').on('click', function () {
  let sortType = $(this).text().trim();

  // Удаляем активный класс у всех пунктов меню
  $('.without-visiting--mobile__dropdown-item').removeClass(
    'without-visiting--mobile__dropdown-item--active'
  );

  // Добавляем активный класс к выбранному элементу
  $(this).addClass('without-visiting--mobile__dropdown-item--active');

  // Обновляем выбранный элемент дропдауна
  $('.without-visiting--mobile__dropdown-selected').text(sortType);

  // Применяем сортировку на основе выбранного элемента
  sortItems(sortType);
});

// Функция сортировки
function sortItems(type) {
  let items = $('.without-visiting--mobile__item');

  items.sort(function (a, b) {
    let textA, textB;

    switch (type) {
      case 'Название от А-Я':
        textA = $(a)
          .find('.without-visiting--mobile__item-name')
          .text()
          .toLowerCase();
        textB = $(b)
          .find('.without-visiting--mobile__item-name')
          .text()
          .toLowerCase();
        return textA.localeCompare(textB);
      case 'Название от Я-А':
        textA = $(a)
          .find('.without-visiting--mobile__item-name')
          .text()
          .toLowerCase();
        textB = $(b)
          .find('.without-visiting--mobile__item-name')
          .text()
          .toLowerCase();
        return textB.localeCompare(textA);
      case 'Сумма по возрастанию':
        textA = parseFloat(
          $(a)
            .find('.without-visiting--mobile__item-text')
            .eq(0)
            .text()
            .replace(/[^\d]/g, '')
        );
        textB = parseFloat(
          $(b)
            .find('.without-visiting--mobile__item-text')
            .eq(0)
            .text()
            .replace(/[^\d]/g, '')
        );
        return textA - textB;
      case 'Сумма по убыванию':
        textA = parseFloat(
          $(a)
            .find('.without-visiting--mobile__item-text')
            .eq(0)
            .text()
            .replace(/[^\d]/g, '')
        );
        textB = parseFloat(
          $(b)
            .find('.without-visiting--mobile__item-text')
            .eq(0)
            .text()
            .replace(/[^\d]/g, '')
        );
        return textB - textA;
      case 'Срок по возрастанию':
        textA = parseInt(
          $(a).find('.without-visiting--mobile__item-text').eq(1).text()
        );
        textB = parseInt(
          $(b).find('.without-visiting--mobile__item-text').eq(1).text()
        );
        return textA - textB;
      case 'Срок по убыванию':
        textA = parseInt(
          $(a).find('.without-visiting--mobile__item-text').eq(1).text()
        );
        textB = parseInt(
          $(b).find('.without-visiting--mobile__item-text').eq(1).text()
        );
        return textB - textA;
      case 'Процент по возрастанию':
        textA = parseFloat(
          $(a)
            .find('.without-visiting--mobile__item-text')
            .eq(2)
            .text()
            .replace('%', '')
        );
        textB = parseFloat(
          $(b)
            .find('.without-visiting--mobile__item-text')
            .eq(2)
            .text()
            .replace('%', '')
        );
        return textA - textB;
      case 'Процент по убыванию':
        textA = parseFloat(
          $(a)
            .find('.without-visiting--mobile__item-text')
            .eq(2)
            .text()
            .replace('%', '')
        );
        textB = parseFloat(
          $(b)
            .find('.without-visiting--mobile__item-text')
            .eq(2)
            .text()
            .replace('%', '')
        );
        return textB - textA;
    }
  });

  // Применяем отсортированные элементы
  $('.without-visiting--mobile__items').html(items);
}

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.without-visiting__table');
  const headers = table.querySelectorAll('th');
  const tbody = table.querySelector('tbody');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const sortType = header.getAttribute('data-sort-type');
      const rows = Array.from(tbody.querySelectorAll('tr'));
      const isAscending = header.classList.contains('asc');

      rows.sort((a, b) => {
        const cellA = a.querySelectorAll('td')[index].innerText.trim();
        const cellB = b.querySelectorAll('td')[index].innerText.trim();

        if (sortType === 'number') {
          const numA = parseFloat(
            cellA.replace(/[^\d,.-]/g, '').replace(',', '.')
          );
          const numB = parseFloat(
            cellB.replace(/[^\d,.-]/g, '').replace(',', '.')
          );
          return isAscending ? numA - numB : numB - numA;
        } else {
          return isAscending
            ? cellA.localeCompare(cellB)
            : cellB.localeCompare(cellA);
        }
      });

      // Обновляем класс для направления сортировки
      headers.forEach((h) => h.classList.remove('asc', 'desc'));
      header.classList.toggle('asc', !isAscending);
      header.classList.toggle('desc', isAscending);

      // Переставляем отсортированные строки в таблице
      rows.forEach((row) => tbody.appendChild(row));
    });
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

$(document).ready(function () {
  function initializeSlick() {
    if ($(window).width() < 1001) {
      if (!$('.popular-banks__rows').hasClass('slick-initialized')) {
        $('.popular-banks__rows').slick({
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
          dots: false,
          responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1.5,
              },
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1.1,
              },
            },
          ],
        });
      }
    } else {
      if ($('.popular-banks__rows').hasClass('slick-initialized')) {
        $('.popular-banks__rows').slick('unslick');
      }
    }
  }

  initializeSlick();

  $(window).resize(function () {
    initializeSlick();
  });
});

//smooth-scrolling
$(' .offers__row-reviews, .offers-similar__row-reviews').on(
  'click',
  function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top - 100;
    $('body,html').animate({ scrollTop: top }, 800);
  }
);

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
const swiperCategories = new Swiper(
  '.top-categories--mobile__cards.swiper-container',
  {
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
  }
);

//Swiper all-banks__logos
const swiperAllBanks = new Swiper('.all-banks__logos.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 25,
  freeMode: true,
  loop: false,
});

//Swiper experts-opinion
const swiperExpertsopinion = new Swiper('.experts-opinion__cards', {
  slidesPerView: 2,
  spaceBetween: 30,
  freeMode: true,
  loop: false,
  breakpoints: {
    1101: {
      slidesPerView: 2,
    },
    1031: {
      slidesPerView: 1.8,
    },
    801: {
      slidesPerView: 1.4,
      spaceBetween: 24,
    },
    601: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    521: {
      slidesPerView: 1.7,
      spaceBetween: 24,
    },
    300: {
      slidesPerView: 1.4,
      spaceBetween: 24,
    },
  },
});

//Swiper all-banks__logos
const swiperExchange = new Swiper('.exchange-rate__cards.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 24,
  freeMode: true,
  loop: false,
});

//Swiper all-banks__logos
const swiperTegss = new Swiper('.bank-card__tegss.swiper-container', {
  slidesPerView: 'auto',
  freeMode: true,
  loop: false,
  breakpoints: {
    801: {
      spaceBetween: 24,
    },
    200: {
      spaceBetween: 10,
    },
  },
});

//Swiper all-banks__logos
const swiperTegsLoans = new Swiper('.sorting-loans__body-tegs.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 24,
  freeMode: true,
  loop: false,
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
