import { Lotto } from "../model/lotto.js";
import { getPrice } from "../utils/dom.js";
import { getRandomNumber } from "../utils/getRandomNumber.js";
import { isValidPrice } from "../utils/valid.js";
import { renderTicket } from "../view/renderPurchaseLotto.js";

let $purchaseLottoBtn = document.querySelector(".purchase-btn");

function countingTicket(price) {
  let tickets = Math.floor(price / 1000);
  let change = price % 1000;
  alert(`${tickets} 개의 로또티켓을 사셨습니다
남은 거스름돈은 ${change} 원 입니다`);
  return tickets;
}

//티켓수로 for문을 돌려서 랜덤수를 생성해서 로또이켓을 생성한다.
function getLotto(tickets) {
  let lottos = [];
  for (var i = 0; i < tickets; i++) {
    let lotto = new Lotto(getRandomNumber());
    lottos.push(lotto);
  }
  console.log(lottos);
}

function handlerPurchaseLotto() {
  let price = Number(getPrice());
  if (isValidPrice(price)) {
    let tickets = countingTicket(price);
    getLotto(tickets);
    renderTicket(tickets);
  }
}

export function purchaseLotto() {
  $purchaseLottoBtn.addEventListener("click", handlerPurchaseLotto);
}
