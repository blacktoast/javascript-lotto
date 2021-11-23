/**
 *  [] 모달창을 만들어서 수동 구매 입력창 만들기
 * [] 수동구입 금액을 어디서 받지?
 */

import { onModalClose, onModalShow } from "../utils/setProperty.js";

const $manualBuyModalBtn = document.querySelector(".manual-buy-btn");
const $modalClose = document.querySelector(".modal-close-manual");




export function initManualBuyEvent() {
  $manualBuyModalBtn.addEventListener("click");
  $modalClose.addEventListener("click");
}
