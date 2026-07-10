window.onload = () => {
  setTimeout(() => {
    document.body.classList.remove("not-loaded");
  }, 1000);
};
const petalCount = 10;

for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement("div");
    petal.className = "petal";

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.top = -(Math.random() * 100) + "vh";

    const size = 1 + Math.random() * 2;
    petal.style.width = size + "vmin";
    petal.style.height = size * 1.5 + "vmin";

    petal.style.animationDuration = (5 + Math.random() * 8) + "s";
    petal.style.animationDelay = Math.random() * 10 + "s";
    petal.style.opacity = 0.4 + Math.random() * 0.6;

    document.body.appendChild(petal);
}