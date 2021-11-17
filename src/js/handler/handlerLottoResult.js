import { getInputWinningNumberByClassNameAll } from "../utils/dom.js";

function handlerInputNumberSlicer(event) {
  console.log(event);
}

function handlerCheckLottoResult(event) {}

export function checkLottoResult() {
  let resultBtn = document.querySelector(".open-result-modal-button");
  resultBtn.addEventListener("click", handlerCheckLottoResult);
}
