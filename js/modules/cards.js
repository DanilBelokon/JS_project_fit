import { getResource } from "../services/services";

function cards() {
  // Используем классы для краточек

  const cardMenu = document.querySelector("[data-menu]"),
    menuItem = document.querySelectorAll(".menu__item");

  class CardMenu {
    constructor(img, alt, title, descr, price, parentSelector) {
      this.img = img;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 27;
      this.changeToUAH();
    }

    changeToUAH() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement("div");
      element.innerHTML = `<div class="menu__item">
            <img src=${this.img} alt=${this.alt} />
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">
              ${this.descr}
            </div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
              <div class="menu__item-cost">Цена:</div>
              <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
          </div>`;
      this.parent.append(element);
    }
  }
  new CardMenu(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: большесвежих овощей и фруктов. Продукт активных и здоровых людей. Этоабсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    ".menu .container"
  ).render();
  new CardMenu(
    "img/tabs/elite.jpg",
    "elite",
    "Меню “Премиум”",
    "В меню “Премиум” мы используем не только красивый дизайн упаковки,но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
    9,
    ".menu .container"
  ).render();
  new CardMenu(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
    9,
    ".menu .container"
  ).render();

  //   class CardMenu {
  //     constructor(img, alt, title, descr, price, parentSelector, ...classes) {
  //       this.img = img;
  //       this.alt = alt;
  //       this.title = title;
  //       this.descr = descr;
  //       this.price = price;
  //       this.classes = classes;
  //       this.parent = document.querySelector(parentSelector);
  //       this.transfer = 27;
  //       this.changeToUAH();
  //     }

  //     changeToUAH() {
  //       this.price = this.price * this.transfer;
  //     }

  //     render() {
  //       const element = document.createElement("div");
  //       if (this.classes.length === 0) {
  //         this.element = "menu__item";
  //         element.classList.add(this.element);
  //       } else {
  //         this.classes.forEach((className) => element.classList.add(className));
  //       }

  //       element.innerHTML = `
  //         <img src=${this.img} alt=${this.alt} />
  //         <h3 class="menu__item-subtitle">${this.title}</h3>
  //         <div class="menu__item-descr">
  //           ${this.descr}
  //         </div>
  //         <div class="menu__item-divider"></div>
  //         <div class="menu__item-price">
  //           <div class="menu__item-cost">Цена:</div>
  //           <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
  //         </div>
  // `;
  //       this.parent.append(element);
  //     }
  //   }

  //   getResource("http://localhost:3000/menu").then((data) => {
  //     data.forEach(({ img, altimg, title, descr, price }) => {
  //       new CardMenu(
  //         img,
  //         altimg,
  //         title,
  //         descr,
  //         price,
  //         ".menu .container"
  //       ).render();
  //     });
  //   });

  // способ создания карт без классов

  //   getResource("http://localhost:3000/menu").then((data) => createCard(data));

  //   function createCard(data) {
  //     data.forEach(({ img, altimg, title, descr, price }) => {
  //       const element = document.createElement("div");

  //       element.classList.add("menu__item");
  //       element.innerHTML = `
  //           <img src=${img} alt=${altimg} />
  //           <h3 class="menu__item-subtitle">${title}</h3>
  //           <div class="menu__item-descr">
  //             ${descr}
  //           </div>
  //           <div class="menu__item-divider"></div>
  //           <div class="menu__item-price">
  //             <div class="menu__item-cost">Цена:</div>
  //             <div class="menu__item-total"><span>${price}</span> грн/день</div>
  //           </div>
  //  `;
  //       document.querySelector(".menu .container").append(element);
  //     });
  //   }

  // axios

  // axios.get("http://localhost:3000/menu").then((data) => {
  //   data.data.forEach(({ img, altimg, title, descr, price }) => {
  //     new CardMenu(
  //       img,
  //       altimg,
  //       title,
  //       descr,
  //       price,
  //       ".menu .container"
  //     ).render();
  //   });
  // });
}

export default cards;
