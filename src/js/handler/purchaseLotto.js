import { getPrice } from "../utils/dom.js";
import { isValidPrice } from "../utils/valid.js";

let $purchaseLottoBtn = document.querySelector(".purchase-btn");
function countingTicket(price) {
  let tickets = Math.floor(price / 1000);
  let change = price % 1000;
  alert(`${tickets} 개의 로또티켓을 사셨습니다
남은 거스름돈은 ${change} 원 입니다`);
  return tickets;
}

function handlerPurchaseLotto() {
  let price = Number(getPrice());

  if (isValidPrice(price)) {
    countingTicket(price);
  }
}

export function purchaseLotto() {
  $purchaseLottoBtn.addEventListener("click", handlerPurchaseLotto);
}
