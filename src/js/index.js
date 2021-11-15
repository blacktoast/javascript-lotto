import { initModalEvents } from "./handler/modalEvent.js";
import { purchaseLotto } from "./handler/purchaseLotto.js";
const $lottoNumbersToggleButton = document.querySelector(
  ".lotto-numbers-toggle-button"
);
const App = () => {
  console.log("object");
  purchaseLotto();
  initModalEvents();
  console.log($lottoNumbersToggleButton);
};

window.addEventListener("DOMContentLoaded", App);
