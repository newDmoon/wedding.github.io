function updateTimer() {
    const weddingDate = new Date('April 18, 2026 16:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const timerElement = document.getElementById('timer');

    if (distance < 0) {
        clearInterval(timerInterval);
        timerElement.innerHTML = "Этот счастливый день настал!";
        return;
    }

    timerElement.innerHTML = `
        <div class="time-block"><span>${days} :</span></div>
        <div class="time-block"><span>${hours} :</span></div>
        <div class="time-block"><span>${minutes} :</span></div>
        <div class="time-block"><span>${seconds}</span></div>
    `;
}

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();