
document.addEventListener("DOMContentLoaded", () => {
  const consoleSelect = document.getElementById("consoleSelect");
  const romList = document.getElementById("romList");
  const startGameBtn = document.getElementById("startGameBtn");

  let selectedRom = null;

  romList.addEventListener("change", () => {
    selectedRom = romList.value;
    startGameBtn.disabled = !selectedRom || !consoleSelect.value;
  });

  consoleSelect.addEventListener("change", () => {
    startGameBtn.disabled = !selectedRom || !consoleSelect.value;
  });

  startGameBtn.addEventListener("click", () => {
    const emulatorContainer = document.getElementById("emulatorContainer");
    const consoleType = consoleSelect.value;

    if (!selectedRom || !consoleType) return;

    emulatorContainer.innerHTML = '<p>Launching ' + selectedRom + ' on ' + consoleType.toUpperCase() + '...</p>';

    // Placeholder for actual emulator logic
  });
});
