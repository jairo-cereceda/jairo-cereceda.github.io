let isFirstLoad = true;
let previousVolumeState = 0;

export function musicControl() {
  const music = document.getElementById('music') as HTMLAudioElement;
  const volumeInput = document.getElementById(
    'volume'
  ) as HTMLInputElement | null;
  const volumeButton = document.getElementById('volume-button');
  const volumeOnIcon = document.getElementById('volume-on');
  const volumeMaxIcon = document.getElementById('volume-max');
  const volumeOffIcon = document.getElementById('volume-off');
  const lang = navigator.language;

  if (!music || !volumeInput || !volumeButton) return;

  if (isFirstLoad) {
    music.volume = 0;
    music.pause();
    volumeInput.value = '0';
    isFirstLoad = false;
  } else {
    volumeInput.value = String(Math.round(music.volume * 100));

    if (music.volume > 0) {
      previousVolumeState = music.volume * 100;
    }
  }

  const updateProgress = () => {
    const val = Number(volumeInput.value);
    const min = Number(volumeInput.min) || 0;
    const max = Number(volumeInput.max) || 100;
    const percent = ((val - min) * 100) / (max - min);
    volumeInput.style.setProperty('--progress', `${percent}%`);
  };

  const syncIcons = () => {
    if (!volumeOnIcon || !volumeOffIcon || !volumeMaxIcon) return;

    const vol = music.volume * 100;

    volumeMaxIcon.classList.add('hidden');
    volumeOnIcon.classList.add('hidden');
    volumeOffIcon.classList.add('hidden');

    if (vol >= 75) {
      volumeMaxIcon.classList.remove('hidden');
      volumeButton.ariaLabel =
        lang === 'es-ES' ? 'Silenciar música' : 'Mute music';
    } else if (vol > 0) {
      volumeOnIcon.classList.remove('hidden');
      volumeButton.ariaLabel =
        lang === 'es-ES' ? 'Silenciar música' : 'Mute music';
    } else {
      volumeOffIcon.classList.remove('hidden');
      volumeButton.ariaLabel =
        lang === 'es-ES' ? 'Activar música' : 'Play music';
    }
  };

  updateProgress();
  syncIcons();

  if (volumeInput.dataset.initialized === 'true') return;

  volumeInput.addEventListener('input', () => {
    const val = Number(volumeInput.value);
    music.volume = val / 100;

    if (val > 0) {
      previousVolumeState = val;
      music.play().catch(() => {});
    }

    updateProgress();
    syncIcons();
  });

  volumeButton.addEventListener('click', () => {
    if (music.volume > 0) {
      previousVolumeState = music.volume * 100;
      music.volume = 0;
      volumeInput.value = '0';
    } else {
      const restoreVol = previousVolumeState || 50;
      music.volume = restoreVol / 100;
      volumeInput.value = String(restoreVol);
      music.play().catch(() => {});
    }
    updateProgress();
    syncIcons();
  });

  volumeInput.dataset.initialized = 'true';
}
