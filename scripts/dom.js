import { openModal } from './modal.js'; 
export function createCard(card, cardExample, cardList) {
    const newCard = cardExample.cloneNode(true);
    const title = newCard.querySelector(".ul__title");
    const text = newCard.querySelector(".ul__text");
    const likeButton = newCard.querySelector(".like");
    const deleteButton = newCard.querySelector(".delete_card_button");
    const editButton = newCard.querySelector(".edit");
    const cardItem = newCard.querySelector(".main__li");
  
    title.textContent = card.title;
    text.textContent = card.description;
  
    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("like_active");
      cardItem.classList.toggle("main__li_active");
    });
  
    deleteButton.addEventListener("click", () => {
      cardItem.remove();
    });
  
    editButton.addEventListener("click", () => {
      openModal(cardItem, title, text);
    });
  
    cardList.appendChild(newCard);
  }
  
  export function deleteCards(page) {
    const clearButton = page.querySelector(".input__clear_button");
    clearButton.addEventListener("click", () => {
      page.querySelectorAll(".main__li").forEach((card) => card.remove());
    });
  }
  