import { getStateTickets, state } from "../model/state.js";
import {
  getBonusByClassName,
  getInputWinningNumberByClassNameAll,
} from "../utils/dom.js";

function handlerCheckLottoResult(event) {
  let winningNumbers = getInputWinningNumberByClassNameAll();
  winningNumbers = [...winningNumbers].map((e) => {
    return e.value;
  });
  winningNumbers.push(getBonusByClassName().value);
  compareLottoResult(winningNumbers);
}

function compareNumbers(correct, src) {
  let a = correct.filter((e, i) => {
    console.log(e, src[i]);
    return Number(e) === Number(src[i]);
  });
  return a;
}

function compareLottoResult(number) {
  let compareNumber = getStateTickets();
  let sameNumber = 0;
  let bonus = false;
  compareNumber.map((e) => {
    sameNumber = compareNumbers(
      number.slice(0, 6),
      e.numbers.slice(0, 6)
    ).length;
    if (number[6] == e.numbers[6]) bonus = true;
    if (sameNumber == 5 && bonus) sameNumber += 2;
    e.prize = sameNumber;
  });
  console.log(compareNumber);
}
export function checkLottoResult() {
  let resultBtn = document.querySelector(".open-result-modal-button");
  resultBtn.addEventListener("click", handlerCheckLottoResult);
}
