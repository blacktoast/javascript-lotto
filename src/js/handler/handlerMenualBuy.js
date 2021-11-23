/**
 *  [] 모달창을 만들어서 수동 구매 입력창 만들기
 * [] 수동구입 금액을 어디서 받지?
 *  - 구입금액에서 가져와서 받기
 */

import { onModalClose, onModalShow } from "../utils/setProperty.js";
import { getPrice } from "../utils/dom.js";

const $manualBuyModalBtn = document.querySelector(".manual-buy-btn");
const $modalClose = document.querySelector(".modal-close-manual");
const $modal = document.querySelector(".modal-manual-buy");

//구입금액가져와서 input갯수 렌더링
function sendTicketNumbers() {
  let allPrice = getPrice();
}

function handlerManualBuy() {}
export function initManualBuyEvent() {
  $manualBuyModalBtn.addEventListener("click", (e) => {
    onModalShow($modal);
  });
  $modalClose.addEventListener("click", (e) => {
    onModalClose($modal);
  });
}
