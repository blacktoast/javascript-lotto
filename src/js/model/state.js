export let state = {
  inputPrice: 0,
  tickets: [],

  get inputPrice() {
    let result = this._inputPrice;
    return result;
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
