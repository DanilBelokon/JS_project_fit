require("es6-promise").polyfill();
import "nodelist-foreach-polyfill"; // если вдруг не конверитировались модули подгружаем их

// import "slick-slider";

import tabs from "./modules/tabs";
import modal, { openModal } from "./modules/modal";
import timer from "./modules/timer";
import cards from "./modules/cards";
import forms from "./modules/forms";
import calculate from "./modules/calculate";
import slider from "./modules/slider";

window.addEventListener("DOMContentLoaded", () => {
  const modalTimerId = setTimeout(
    () => openModal(".modal", modalTimerId),
    30000
  );

  tabs(
    ".tabheader__item",
    ".tabcontent",
    ".tabheader__items",
    "tabheader__item_active"
  );
  modal("[data-modal]", ".modal", modalTimerId);
  timer(".timer", "2025-03-14");
  cards();
  forms("form", modalTimerId);
  calculate();
  slider({
    container: ".offer__slider",
    nextArrow: ".offer__slider-next",
    slide: ".offer__slide",
    prevArrow: ".offer__slider-prev",
    totalCounter: "#total",
    currentCounter: "#current",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner",
  });
});
