import { getStateTickets, state } from "../model/state.js";
import {
  getBonusByClassName,
  getInputWinningNumberByClassNameAll,
} from "../utils/dom.js";

function handlerInputNumberSlicer(event) {
  console.log(event);
}

function handlerCheckLottoResult(event) {
  let winningNumbers = getInputWinningNumberByClassNameAll();
  winningNumbers = [...winningNumbers].map((e) => {
    console.log(e.value);
    return e.value;
  });
  winningNumbers.push(getBonusByClassName().value);
  compareLottoResult(10);
}

function compareLottoResult(number) {
  let compareNumber = getStateTickets();
  console.log(compareNumber);
}
export function checkLottoResult() {
  let resultBtn = document.querySelector(".open-result-modal-button");
  resultBtn.addEventListener("click", handlerCheckLottoResult);
}
