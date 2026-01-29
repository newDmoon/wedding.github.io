      // Scroll animation
      const sections = document.querySelectorAll("section");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(
            (entry) =>
              entry.isIntersecting && entry.target.classList.add("visible"),
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
        const m = Math.floor((diff / (1000 * 60)) % 60);
        const s = Math.floor((diff / 1000) % 60);

        timer.innerHTML = `
    <div class="time-box">${d} дней</div>
    <div class="time-box">${h} часов</div>
    <div class="time-box">${m} минут</div>
    <div class="time-box">${s} секунд</div>
  `;
      }, 1000);