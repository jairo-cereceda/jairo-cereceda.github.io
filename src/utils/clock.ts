function updateClock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, '0');
  const mins = String(now.getMinutes()).padStart(2, '0');

  const clock = document.getElementById('clock');

  if (!clock) return;

  clock.textContent = `${hours}:${mins}`;
}

export function workingClock() {
  setInterval(updateClock, 1000);

  updateClock();
}
