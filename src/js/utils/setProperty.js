const $modal = document.querySelector(".modal");

export function showElement(view) {
  view.classList.remove("d-none");
}
export function hideElement(view) {
  view.classList.add("d-none");
}
export const onModalShow = (modal) => {
  modal.classList.add("open");
};

export const onModalClose = (modal) => {
  modal.classList.remove("open");
};
