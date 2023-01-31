function loadFooter() {
  const footerTextDiv = document.querySelector(".footer .name");
  const text = `© Cronologus ${new Date().getFullYear()}`;
  footerTextDiv.innerHTML = text;
}

function addPreviewEvent() {
  const previewDiv = document.querySelector(".preview");
  const previewImg = document.querySelector(".preview img");
  document
    .querySelector(".container img")
    .addEventListener("click", (event) => {
      previewDiv.classList.remove("hidden");
      previewImg.src = event.target.src;
    });
  document.querySelector(".preview button").addEventListener("click", () => {
    previewDiv.classList.add("hidden");
  });
}

function main() {
  loadFooter();
  addPreviewEvent();
}

main();
