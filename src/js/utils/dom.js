export function getPrice() {
  let price = document.querySelector(".price-input").value;
  return price;
}

export function getInputWinningNumberByClassNameAll() {
  return document.querySelectorAll(".winning-number");
}

export function getBonusByClassName() {
  return document.querySelect(".bonus-number");
}
