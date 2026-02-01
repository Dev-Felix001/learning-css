const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const container = document.querySelector(".buttons");

// Move NO button randomly
noBtn.addEventListener("mouseenter", () => {
  const maxX = container.clientWidth - noBtn.offsetWidth;
  const maxY = container.clientHeight - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

// YES button click
yesBtn.addEventListener("click", () => {
  message.textContent = "Yaaay! 💖 I knew you’d say YES 😍";
});