import { handlerPurchaseLottoToggle } from "./handler/handlePurchaseResultToggle.js";
import { checkLottoResult } from "./handler/handlerLottoResult.js";
import { initModalEvents } from "./handler/modalEvent.js";
import { purchaseLotto } from "./handler/handlerPurchaseLotto.js";
import { initManualBuyEvent } from "./handler/handlerMenualBuy.js";
const $lottoNumbersToggleButton = document.querySelector(
  ".lotto-numbers-toggle-button"
);
const App = () => {
  console.log("object");
  purchaseLotto();
  initModalEvents();
  initManualBuyEvent();
  $lottoNumbersToggleButton.addEventListener(
    "click",
    handlerPurchaseLottoToggle
  );

  checkLottoResult();
};

window.addEventListener("DOMContentLoaded", App);
