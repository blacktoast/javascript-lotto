import { initModalEvents } from "./handler/modalEvent.js";
import { purchaseLotto } from "./handler/purchaseLotto.js";

const App = () => {
  console.log("object");
  purchaseLotto();
  initModalEvents();
};

window.addEventListener("DOMContentLoaded", App);
