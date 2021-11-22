import { getStateTickets, state } from "../model/state.js";
import {
  getBonusByClassName,
  getInputWinningNumberByClassNameAll,
} from "../utils/dom.js";
import { renderLottoResultsModal } from "../view/renderLottoResultModal.js";
import { initModalEvents } from "./modalEvent.js";

function handlerCheckLottoResult(event) {
  let winningNumbers = getInputWinningNumberByClassNameAll();
  if (isInputEmpty(winningNumbers)) {
    return;
  }
  winningNumbers = [...winningNumbers].map((e) => {
    return e.value;
  });
  winningNumbers.push(getBonusByClassName().value);
  calculateLottoPrize(winningNumbers);
}

function isInputEmpty(inputArray) {
  let isEmpty = false;
  [...inputArray].map((e) => {
    console.log(e.value);
    if (e.value === "") {
      isEmpty = true;
    }
  });
  if (isEmpty) alert("공백을 입력하지 마세요");
  return isEmpty;
}
// 렌더링전 각 티켓의 로또 결과값을 등수 배열로 변환
function makePrizeArray(tickets) {
  console.log(tickets);
  let prizes = [0, 0, 0, 0, 0];
  let total = 0;
  tickets.map((e) => {
    switch (e.prize) {
      case 3:
        prizes[0] += 1;
        total += 5000;
        break;
      case 4:
        prizes[1] += 1;
        total += 50000;
        break;
      case 5:
        prizes[2] += 1;
        total += 1500000;
        break;
      case 7:
        prizes[3] += 1;
        total += 30000000;
        break;
      case 6:
        prizes[4] += 1;
        total += 2000000000;
        break;
    }
  });
  return [prizes, total];
}

function compareNumbers(correct, src) {
  let a = correct.filter((e, i) => {
    console.log(e, src[i]);
    return Number(e) === Number(src[i]);
  });
  return a;
}

function calculateLottoPrize(number) {
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
  let prizesAndTotalMoney = makePrizeArray(compareNumber);
  return renderLottoResultsModal(
    prizesAndTotalMoney[0],
    compareNumber.length,
    prizesAndTotalMoney[1]
  );
}
export function checkLottoResult() {
  let resultBtn = document.querySelector(".open-result-modal-button");
  resultBtn.addEventListener("click", handlerCheckLottoResult);
}
