export let state = {
  inputPrice: 0,
  prize: 0,
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
export function resetState() {
  this.inputPrice = 0;
  this.prize = 0;
  this.tickets = [];
}
