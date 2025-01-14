import JSConfetti from "https://cdn.skypack.dev/js-confetti";

window.addEventListener("DOMContentLoaded", (event) => {
  const jsConfetti = new JSConfetti();
  document.querySelector("#confettiButton").addEventListener("click", () => {
    jsConfetti.addConfetti();
    console.log("clicked!")
  });
});
