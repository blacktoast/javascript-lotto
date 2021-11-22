import { onModalClose, onModalShow } from "../utils/setProperty.js";

const $manualBuyModalBtn = document.querySelector(".manual-buy-btn");
const $modalClose = document.querySelector(".modal-close-manual");

export function initManualBuyEvent() {
  $manualBuyModalBtn.addEventListener("click");
  $modalClose.addEventListener("click");
}
