import { resetState } from "../model/state.js";
import { onModalClose, onModalShow } from "../utils/setProperty.js";
import { renderRetry } from "../view/renderRetry.js";

const $showResultButton = document.querySelector(".open-result-modal-button");
const $modalClose = document.querySelector(".modal-close");
const $resetBtn = document.querySelector(".resetBtn");
const $modal = document.querySelector(".prize");

const onReset = () => {
  console.log("s");
  onModalClose($modal);
  resetState();
  renderRetry();
};

export function initModalEvents() {
  $showResultButton.addEventListener("click", (e) => {
    onModalShow($modal);
  });
  $modalClose.addEventListener("click", (e) => {
    onModalClose($modal);
  });
  $resetBtn.addEventListener("click", onReset);
}
