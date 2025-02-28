import { renderLottoResults, renderTicket } from "./renderPurchaseLotto.js";



export const renderRetry = () => {
  let inputPrizeNumber = document.querySelectorAll(".winning-number");
  [...inputPrizeNumber].map((e) => {
    e.value = "";
  });
  document.querySelector(".price-input").value = "";
  document.querySelector(".bonus-number").value = "";
  renderTicket();
  renderLottoResults();
};
