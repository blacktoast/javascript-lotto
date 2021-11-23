/**
 *  [] 모달창을 만들어서 수동 구매 입력창 만들기
 * [] 수동구입 금액을 어디서 받지?
 *  - 구입금액에서 가져와서 받기
 */

import { onModalClose, onModalShow } from "../utils/setProperty.js";
import { getPrice } from "../utils/dom.js";
import { isValidPrice } from "../utils/valid.js";
import { renderManualBuyModal } from "../view/renderManualBuy.js";

const $manualBuyModalBtn = document.querySelector(".manual-buy-btn");
const $modalClose = document.querySelector(".modal-close-manual");
const $manualBuyBtn = document.querySelector(".manual-buy-button");
const $modal = document.querySelector(".modal-manual-buy");

function countingTicket(price) {
  let tickets = Math.floor(price / 1000);
  let change = price % 1000;
  return tickets;
}
//구입금액가져와서 input갯수 렌더링
function sendTicketNumbers() {
  let allPrice = getPrice();
  if (isValidPrice(allPrice)) {
    let tickets = countingTicket(allPrice);
    return tickets;
  }
  alert("1000원 이상을 입력해주세요");
}

function handlerManualBuy() {
  console.log("test");
}
export function initManualBuyEvent() {
  $manualBuyModalBtn.addEventListener("click", (e) => {
    onModalShow($modal);
    renderManualBuyModal(sendTicketNumbers());
  });
  $modalClose.addEventListener("click", (e) => {
    onModalClose($modal);
  });
  $manualBuyBtn.addEventListener("click", handlerManualBuy);
}
