import {
  renderLottoResults,
  renderTicket,
} from "../view/renderPurchaseLotto.js";

export const handlerPurchaseLottoToggle = ({ target }) => {
  target.checked ? renderLottoResults() : renderTicket();
};
