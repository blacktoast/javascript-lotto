/**
 *  [] 각 당첨결과 값 들과 구입금액 가져오기
 */

export function renderLottoResultsModal(prizeArr, purchasePrice) {
  let $resultTable = document.querySelector(".result-table>tbody");
  let table = [...$resultTable.querySelectorAll("tr")].map((e) => {
    return e.querySelector("td:last-child");
  });
  table.forEach((row, i) => {
    row.innerText = `${prizeArr[i]} 개`;
  });
  console.log(table);
}
