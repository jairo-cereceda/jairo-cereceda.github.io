export function musicControl() {
  const volumeInput = document.getElementById(
    'volume'
  ) as HTMLInputElement | null;
  const volumeButton = document.getElementById('volume-button');
  const volumeOnIcon = document.getElementById('volume-on');
  const volumeMaxIcon = document.getElementById('volume-max');
  const volumeOffIcon = document.getElementById('volume-off');
  const music = document.getElementById('music') as HTMLAudioElement;

  if (!volumeInput || !volumeButton || !music) return;

  let currentVolumeState = 0;
  let previousVolumeState = Number(volumeInput.value);

  const updateProgress = () => {
    const min = Number(volumeInput.min);
    const max = Number(volumeInput.max);
    const value = Number(volumeInput.value);

    const percent = ((value - min) * 100) / (max - min);

    volumeInput.style.setProperty('--progress', `${percent}%`);
  };

  volumeInput.addEventListener('input', () => {
    const volume = Number(volumeInput.value);

    if (volume > 0) {
      previousVolumeState = volume;
    }

    music.volume = volume / 100;

    currentVolumeState = music.volume * 100;

    updateProgress();
    toggleIcons();
  });

  volumeButton.addEventListener('click', volumeControl);

  function toggleIcons() {
    if (!volumeOnIcon || !volumeOffIcon || !volumeMaxIcon) return;

    if (currentVolumeState >= 75) {
      volumeMaxIcon.classList.remove('hidden');
      volumeOffIcon.classList.add('hidden');
      volumeOnIcon.classList.add('hidden');
    } else if (currentVolumeState > 0) {
      volumeMaxIcon.classList.add('hidden');
      volumeOnIcon.classList.remove('hidden');
      volumeOffIcon.classList.add('hidden');
    } else {
      volumeMaxIcon.classList.add('hidden');
      volumeOnIcon.classList.add('hidden');
      volumeOffIcon.classList.remove('hidden');
    }
  }

  function volumeControl() {
    if (currentVolumeState > 0) {
      previousVolumeState = currentVolumeState;
      volumeInput!.value = '0';
      music.volume = 0;
    } else {
      volumeInput!.value = String(previousVolumeState);
      music.volume = previousVolumeState / 100;

      music.play();
    }

    currentVolumeState = music.volume * 100;
    updateProgress();
    toggleIcons();
  }

  updateProgress();
}
