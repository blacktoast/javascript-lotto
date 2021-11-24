import { Lotto } from "../model/lotto.js";
import { getRandomNumber } from "../utils/getRandomNumber.js";
import { getStateTickets, setStateTicket } from "../model/state.js";

export function getLotto(tickets) {
  let lottos = [];
  for (var i = 0; i < tickets; i++) {
    let lotto = new Lotto(getRandomNumber());
    lottos.push(lotto);
  }
  setStateTicket(lottos);
  getStateTickets();
  console.log(lottos);
}
