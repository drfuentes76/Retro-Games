
const romInput = document.getElementById('romUpload');
const consoleSelect = document.getElementById('consoleSelect');
const romList = document.getElementById('romList');
const startBtn = document.getElementById('startGameBtn');
const playerName = document.getElementById('playerName');

function checkReadyToStart() {
  const consoleReady = consoleSelect.value !== '';
  const romReady = romInput.files.length > 0 || romList.value !== '';
  startBtn.disabled = !(consoleReady && romReady);
}

romInput.addEventListener('change', checkReadyToStart);
consoleSelect.addEventListener('change', checkReadyToStart);
romList.addEventListener('change', checkReadyToStart);

startBtn.addEventListener('click', async () => {
  const consoleType = consoleSelect.value;
  const file = romInput.files[0];
  const username = playerName.value || "Player";

  let romBuffer;

  if (file) {
    romBuffer = await file.arrayBuffer();
  } else {
    const selectedROM = romList.value;
    const response = await fetch('roms/' + selectedROM);
    romBuffer = await response.arrayBuffer();
  }

  launchEmulator(consoleType, romBuffer, username);
});

function launchEmulator(consoleType, romBuffer, username) {
  const container = document.getElementById('emulatorContainer');
  container.innerHTML = `<p>🎮 Launching ${consoleType.toUpperCase()} emulator for ${username}...</p>`;

  // Placeholder for launching the actual emulator
  switch (consoleType) {
    case 'nes':
      // Initialize NES emulator with romBuffer
      break;
    case 'snes':
      // Initialize SNES emulator with romBuffer
      break;
    case 'gb':
      // Initialize Game Boy emulator with romBuffer
      break;
    case 'gba':
      // Initialize GBA emulator with romBuffer
      break;
    case 'genesis':
      // Initialize Genesis emulator with romBuffer
      break;
    case 'n64':
      // Initialize N64 emulator with romBuffer
      break;
    default:
      container.innerHTML = '<p>⚠️ Unsupported console selected.</p>';
  }
}
