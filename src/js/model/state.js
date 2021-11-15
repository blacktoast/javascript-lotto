let state = {
  tickets: [],
};

export function setStateTicket(states) {
  state.tickets = states;
}
export function getStateTickets() {
  return state.tickets;
}
