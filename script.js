const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const buttons = document.querySelector(".buttons");
const yesSound = document.getElementById("yesSound");
const noSound = document.getElementById("noSound");

// Move NO button
function moveNoButton() {
  noBtn.style.animation = "shake 0.3s";
  noSound.play();

  setTimeout(() => {
    noBtn.style.animation = "";

    const maxX = buttons.clientWidth - noBtn.offsetWidth;
    const maxY = buttons.clientHeight - noBtn.offsetHeight;

    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";
  }, 300);
}

// Desktop hover
noBtn.addEventListener("mouseenter", moveNoButton);

// Mobile tap
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});

// YES click
yesBtn.addEventListener("click", () => {
  yesSound.play();
  message.textContent = "Yaaay 💖 I knew it 😍";

  for (let i = 0; i < 20; i++) {
    createHeart();
  }
});

// Hearts animation
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}