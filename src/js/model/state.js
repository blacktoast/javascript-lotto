export let state = {
  inputPrice: 0,
  prize: 0,
  tickets: [],
};

export function setStateInputPrice(price) {
  state.inputPrice = price;
}

export function setStateTicket(states) {
  state.tickets = states;
}
export function addStateTicket(states) {
  let dest = state.tickets.concat(states);
  state.tickets = dest;
}
export function getStateTickets() {
  return state.tickets;
}
export function resetState() {
  state.inputPrice = 0;
  state.prize = 0;
  state.tickets = [];
}
