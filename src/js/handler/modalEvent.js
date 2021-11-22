import { resetState } from "../model/state.js";
import { onModalClose, onModalShow } from "../utils/setProperty.js";
import { renderRetry } from "../view/renderRetry.js";

const $showResultButton = document.querySelector(".open-result-modal-button");
const $modalClose = document.querySelector(".modal-close");
const $resetBtn = document.querySelector(".resetBtn");
const $modal = document.querySelector(".modal");

const onReset = () => {
  console.log("s");
  onModalClose();
  resetState();
  renderRetry();
};

export function initModalEvents() {
  $showResultButton.addEventListener("click", onModalShow);
  $modalClose.addEventListener("click", onModalClose);
  $resetBtn.addEventListener("click", onReset);
}
