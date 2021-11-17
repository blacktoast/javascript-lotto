let state = {
  inputPrice: 0,
  tickets: [],

  get inputPrice() {
    return this.inputPrice;
  },
  set inputPrice(value) {
    this.inputPrice = Number(value);
  },
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
