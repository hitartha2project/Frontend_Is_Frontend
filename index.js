const textareaEl = document.getElementById("textarea1");
const totalCounterEl = document.getElementById("tatal-co");
const remainingCounterEl = document.getElementById("Rema-ing");

textareaEl.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter();

function updateCounter() {
  totalCounterEl.innerText = textareaEl.value.length;

  remainingCounterEl.innerText =
    textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}
