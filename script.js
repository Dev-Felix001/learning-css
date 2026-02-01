const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const buttons = document.querySelector(".buttons");
const decorations = document.getElementById("decorations");

// === SMART NO BUTTON (distance-based) ===
document.addEventListener("mousemove", (e) => {
  const btnRect = noBtn.getBoundingClientRect();

  const btnX = btnRect.left + btnRect.width / 2;
  const btnY = btnRect.top + btnRect.height / 2;

  const distX = e.clientX - btnX;
  const distY = e.clientY - btnY;
  const distance = Math.sqrt(distX * distX + distY * distY);

  // Sensitivity radius
  const dangerZone = 150;

  if (distance < dangerZone) {
    const speed = (dangerZone - distance) * 0.8; // closer = faster

    const moveX = (-distX / distance) * speed;
    const moveY = (-distY / distance) * speed;

    let newLeft = noBtn.offsetLeft + moveX;
    let newTop = noBtn.offsetTop + moveY;

    // Keep inside container
    newLeft = Math.max(0, Math.min(newLeft, buttons.clientWidth - noBtn.offsetWidth));
    newTop = Math.max(0, Math.min(newTop, buttons.clientHeight - noBtn.offsetHeight));

    noBtn.style.left = newLeft + "px";
    noBtn.style.top = newTop + "px";
  }
});

// YES click
yesBtn.addEventListener("click", () => {
  message.textContent = "Yaaay 💕 I knew you’d say YES 😍💐";

  for (let i = 0; i < 25; i++) {
    createDecoration();
  }
});

// === Floating flowers & gifts ===
const emojis = ["💖", "🌸", "🌹", "🎁", "💐", "❤️"];

function createDecoration() {
  const deco = document.createElement("div");
  deco.classList.add("decoration");
  deco.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  deco.style.left = Math.random() * 100 + "vw";
  deco.style.animationDuration = 3 + Math.random() * 3 + "s";
  document.body.appendChild(deco);

  setTimeout(() => deco.remove(), 6000);
}

// Continuous decorations
setInterval(createDecoration, 600);