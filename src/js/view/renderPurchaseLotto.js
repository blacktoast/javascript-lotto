import { getStateTickets } from "../model/state.js";
import { hideElement, showElement } from "../utils/setProperty.js";

let $tickets = document.querySelector("#purchase-result-section__row-align");
let $resultLottos = document.querySelector(
  "#purchase-result-section__col-align"
);
let $totals = document.querySelector(".total-tickets");

function lottoTicketHtml() {
  return `<span class="mx-1 text-4xl">🎟️ </span>`;
}

export function renderTicket() {
  showElement($tickets);
  hideElement($resultLottos);
  let tickets = getStateTickets();
  let template = "";
  for (let i = 0; i < tickets.length; i++) {
    template += lottoTicketHtml();
  }
  $tickets.innerHTML = template;
  console.log($totals);
  $totals.innerText = `총 ${tickets.length} 개를 구매하였습니다`;
}

export function renderLottoResults() {
  hideElement($tickets);
  showElement($resultLottos);
  let tickets = getStateTickets();
  let template = "";
  tickets.map((e, i) => {
    template += `<span class="mx-1 text-4xl mt-4">${i}번  : ${e.numbers} </span>`;
  });
  $resultLottos.innerHTML = template;
}
