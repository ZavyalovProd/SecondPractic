import "../styles/styles.css";
import { cards } from "./data.js";
import { createCard, deleteCards } from "./dom.js";

const page = document.querySelector("body");
const cardExample = page.querySelector("#card_example").content;
const cardList = page.querySelector(".main__ul");

cards.forEach((card) => createCard(card, cardExample, cardList));

const form = page.querySelector(".main__form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = event.target
    .querySelector(".input_add_card_title")
    .value.trim();
  const description = event.target
    .querySelector(".input_add_card_description")
    .value.trim();

  if (!title || !description) {
    alert("Заполни оба поля!");
    return;
  }

  if (title.length > 100 || description.length > 100) {
    alert("Длина не должна превышать 100 символов!");
    return;
  }

  createCard({ title, description }, cardExample, cardList);
  event.target.reset();
});

deleteCards(page);
