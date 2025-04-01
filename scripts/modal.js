export function openModal(card, titleElement, textElement) {
    const page = document.querySelector("body");
    const template = page.querySelector("#modal_template");
    const modal = template.content.cloneNode(true).firstElementChild;
    const backgroundBlur = document.createElement("div");

    backgroundBlur.classList.add("backgroundBlur");
    document.body.appendChild(backgroundBlur);
    document.body.appendChild(modal);
    backgroundBlur.addEventListener("click", closeModal);
    modal.querySelector(".close_modalWindow_button").addEventListener("click", closeModal);

    function closeModal() {
        modal.remove();
        backgroundBlur.remove();
      }
  
    const titleInput = modal.querySelector(".edit_input_title");
    const descriptionInput = modal.querySelector(".edit_input_description");
    modal.querySelector(".modal_form").addEventListener("submit", (event) => {
      event.preventDefault();
      titleElement.textContent = titleInput.value;
      textElement.textContent = descriptionInput.value;
      closeModal();
    });
  }
  