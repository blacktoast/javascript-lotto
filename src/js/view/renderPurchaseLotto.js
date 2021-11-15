let $tickets = document.querySelector(".tickets");

function lottoTicketHtml() {
  return `<span class="mx-1 text-4xl">🎟️ </span>`;
}

export function renderTicket(tickets) {
  let template = "";
  for (let i = 0; i < tickets; i++) {
    template += lottoTicketHtml();
  }
  $tickets.innerHTML = template;
}
