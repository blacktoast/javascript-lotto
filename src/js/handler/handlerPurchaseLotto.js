import { getLotto } from "../utils/common.js";
import { getPrice } from "../utils/dom.js";
import { isValidPrice } from "../utils/valid.js";
import { renderTicket } from "../view/renderPurchaseLotto.js";

let $purchaseLottoBtn = document.querySelector(".purchase-btn");

function countingTicket(price) {
  let tickets = Math.floor(price / 1000);
  let change = price % 1000;
  return [tickets, change];
}

function alertPurchaseTickets(tickets, change) {
  alert(`${tickets} 개의 로또티켓을 사셨습니다
남은 거스름돈은 ${change} 원 입니다`);
}
//티켓수로 for문을 돌려서 랜덤수를 생성해서 로또이켓을 생성한다.

function handlerPurchaseLotto() {
  let price = Number(getPrice());
  if (isValidPrice(price)) {
    let tickets, change;
    [tickets, change] = countingTicket(price);

    alertPurchaseTickets(tickets, change);
    getLotto(tickets);
    renderTicket(tickets);
    return;
  }
  alert("1000원 이하는 구입할수없습니다");
}

function wrapperPurchaseLotto() {}

export function purchaseLotto() {
  $purchaseLottoBtn.addEventListener("click", handlerPurchaseLotto);
}
