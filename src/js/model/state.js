let state = {
  tickets: [],
};

export function setStateTicket(states) {
  state.tickets = states;
}
export function getState() {
  console.log(state);
}
