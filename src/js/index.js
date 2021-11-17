import { handlerPurchaseLottoToggle } from "./handler/handlePurchaseResultToggle.js";
import { initModalEvents } from "./handler/modalEvent.js";
import { purchaseLotto } from "./handler/purchaseLotto.js";
const $lottoNumbersToggleButton = document.querySelector(
  ".lotto-numbers-toggle-button"
);
const App = () => {
  console.log("object");
  purchaseLotto();
  initModalEvents();
  $lottoNumbersToggleButton.addEventListener(
    "click",
    handlerPurchaseLottoToggle
  );
};

window.addEventListener("DOMContentLoaded", App);
