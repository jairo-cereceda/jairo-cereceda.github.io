let clockInterval: number | undefined;

function updateClock() {
  const clock = document.getElementById('clock');
  if (!clock) {
    if (clockInterval) clearInterval(clockInterval);
    clockInterval = undefined;
    return;
  }

  const now = new Date();

  const hours = String(now.getHours()).padStart(2, '0');
  const mins = String(now.getMinutes()).padStart(2, '0');

  clock.textContent = `${hours}:${mins}`;
}

export function workingClock() {
  if (clockInterval) clearInterval(clockInterval);
  updateClock();

  clockInterval = window.setInterval(updateClock, 1000);
}
