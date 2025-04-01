export function openModal(card, title, description) {
    const page = document.querySelector("body");
    const template = page.querySelector("#modal_template");
    const modal = template.content.cloneNode(true).firstElementChild;
    const backgroundBlur = document.createElement("div");

    backgroundBlur.classList.add("backgroundBlur");
    document.body.appendChild(backgroundBlur);
    document.body.appendChild(modal);
    
    backgroundBlur.addEventListener("click", () => closeModal(modal, backgroundBlur));
    modal.querySelector(".close_modalWindow_button").addEventListener("click", () => closeModal(modal, backgroundBlur));

    const titleInput = modal.querySelector(".edit_input_title");
    const descriptionInput = modal.querySelector(".edit_input_description");
    modal.querySelector(".modal_form").addEventListener("submit", (event) => {
        event.preventDefault();
        title.textContent = titleInput.value;
        description.textContent = descriptionInput.value;
        closeModal(modal, backgroundBlur);
    });
}

export function closeModal(modal, backgroundBlur) {
    modal.remove();
    backgroundBlur.remove();
}
