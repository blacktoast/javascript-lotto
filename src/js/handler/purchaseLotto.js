import { getPrice } from "../utils/dom.js";

let $purchaseLottoBtn = document.querySelector(".purchase-btn");
function countingTicket(ticket) {}

function handlerPurchaseLotto() {
  let price = getPrice();
  console.log(price);
}

export function purchaseLotto() {
  $purchaseLottoBtn.addEventListener("click", handlerPurchaseLotto);
}
