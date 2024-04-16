// Récupération des différents éléments
const cardNumberInput = document.querySelector("#card__num");

// Ecoute de l'événement "keyup" sur l'input ayant l'id card__num
cardNumberInput.addEventListener("keyup", () => {
  let cardNumber = cardNumberInput.value;
  cardNumber = cardNumber.replace(/\s/g, "");

  if (Number(cardNumber)) {
    cardNumber = cardNumber.match(/.{1,4}/g);
    cardNumber = cardNumber.join(" ");
    cardNumberInput.value = cardNumber;
  }
});
