let $manualBuyContainer = document.querySelector(".manual-buy-container");

function htmlManualBuyInput(i) {
  return `<div class="manual-buy-input mb-4 d-flex">
  <label class="flex-shrink"> ${i + 1} 번 </label>
  <input type="number" class="manual-number mx-1 text-center" />
  <input type="number" class="manual-number mx-1 text-center" />
  <input type="number" class="manual-number mx-1 text-center" />
  <input type="number" class="manual-number mx-1 text-center" />
  <input type="number" class="manual-number mx-1 text-center" />
  <input type="number" class="manual-number mx-1 text-center" />
  <input type="number" class="manual-number mx-1 text-center" />
  </div>`;
}

export function renderManualBuyModal(tickets) {
  let template = "";
  for (let i = 0; i < tickets; i++) {
    template += htmlManualBuyInput(i);
  }
  $manualBuyContainer.innerHTML = template;
  console.log(template);
}
