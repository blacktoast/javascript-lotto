let $tickets = document.querySelector(".tickets");
let $totals = document.querySelector(".total-tickets");
function lottoTicketHtml() {
  return `<span class="mx-1 text-4xl">🎟️ </span>`;
}

export function renderTicket(tickets) {
  let template = "";
  for (let i = 0; i < tickets; i++) {
    template += lottoTicketHtml();
  }
  $tickets.innerHTML = template;
  console.log($totals);
  $totals.innerText = `총 ${tickets} 개를 구매하였습니다`;
}
