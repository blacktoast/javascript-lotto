let state = {
  inputPrice: 0,
  tickets: [],

  get InputPrice()
};

export function setStateInputPrice(price) {
  state.inputPrice = price;
}

export function setStateTicket(states) {
  state.tickets = states;
}
export function getStateTickets() {
  return state.tickets;
}
