// Scroll animation
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(
      (entry) => entry.isIntersecting && entry.target.classList.add("visible"),
    );
  },
  { threshold: 0.2 },
);
sections.forEach((s) => observer.observe(s));

// Guest personalization
const params = new URLSearchParams(window.location.search);
const guest = params.get("guest");
document.getElementById("guestText").innerHTML = guest
  ? `<strong>${guest}</strong>, мы будем счастливы видеть вас на нашем празднике 🤍`
  : `Мы будем рады разделить этот день вместе с вами`;

// Countdown
const weddingDate = new Date("April 16, 2026 00:00:00").getTime();
const timer = document.getElementById("timer");

setInterval(() => {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);

  timer.innerHTML = `
<div class="time-item">
      <div class="time-value">${d}</div>
      <div class="time-label">дней</div>
    </div>
    <div class="time-item">
      <div class="time-value">${h}</div>
      <div class="time-label">часов</div>
    </div>
  `;
}, 1000);

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-list');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    menuLinks.classList.remove('active');
  });
});