import { resetState } from "../model/state.js";
import { renderRetry } from "../view/renderRetry.js";

const $showResultButton = document.querySelector(".open-result-modal-button");
const $modalClose = document.querySelector(".modal-close");
const $modal = document.querySelector(".modal");
const $resetBtn = document.querySelector(".resetBtn");

const onModalShow = () => {
  $modal.classList.add("open");
};

const onModalClose = () => {
  $modal.classList.remove("open");
};

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
