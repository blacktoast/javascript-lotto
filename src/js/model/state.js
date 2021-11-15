let state = {
  tickets: [],
};

export function setStateTicket(state) {
  state.tickets.push(state);
}
export function getState() {
  console.log(state);
}
