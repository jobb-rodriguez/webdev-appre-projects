function performOperations() {
    const cardContent = document.querySelectorAll('.card-body');
    cardContent[0].textContent = Number(cardContent[0].textContent) + 2;
    cardContent[1].textContent = Number(cardContent[1].textContent) - 2;
    cardContent[2].textContent = Number(cardContent[2].textContent) * 2;
    cardContent[3].textContent = Number(cardContent[3].textContent) / 2;
}

const operateButton = document.querySelector("button");
operateButton.addEventListener("click", performOperations);