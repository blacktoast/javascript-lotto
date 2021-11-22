/**
 *  [] 각 당첨결과 값 들과 구입금액 가져오기
 */

export function renderLottoResultsModal(prizeArr, purchasePrice, total) {
  let $resultTable = document.querySelector(".result-table>tbody");
  let totalPurchasedPrice = purchasePrice * 1000;
  let $total = document.querySelector(".total");
  let table = [...$resultTable.querySelectorAll("tr")].map((e) => {
    return e.querySelector("td:last-child");
  });
  table.forEach((row, i) => {
    row.innerText = `${prizeArr[i]} 개`;
  });
  console.log(total, totalPurchasedPrice, total / totalPurchasedPrice);
  $total.innerText = `당신의 수익률은 ${Math.floor(
    (total / totalPurchasedPrice) * 100,
    1
  )}% 입니다`;
  console.log(table);
}
