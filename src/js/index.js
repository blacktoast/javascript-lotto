import { initModalEvents } from "./handler/modalEvent.js";

const App = () => {
  console.log("object");
  initModalEvents();
};

window.addEventListener("DOMContentLoaded", App);
