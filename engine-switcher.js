
document.addEventListener("DOMContentLoaded", () => {
  const consoleSelect = document.getElementById("consoleSelect");
  const romList = document.getElementById("romList");
  const romUpload = document.getElementById("romUpload");
  const startGameBtn = document.getElementById("startGameBtn");

  let selectedRomUrl = null;

  romList.addEventListener("change", () => {
    selectedRomUrl = romList.value;
    startGameBtn.disabled = !selectedRomUrl && romUpload.files.length === 0 || !consoleSelect.value;
  });

  romUpload.addEventListener("change", () => {
    startGameBtn.disabled = romUpload.files.length === 0 && !selectedRomUrl || !consoleSelect.value;
  });

  consoleSelect.addEventListener("change", () => {
    startGameBtn.disabled = romUpload.files.length === 0 && !selectedRomUrl || !consoleSelect.value;
  });

  startGameBtn.addEventListener("click", () => {
    const emulatorContainer = document.getElementById("emulatorContainer");
    const consoleType = consoleSelect.value;
    const selectedFile = romUpload.files[0];

    if (!consoleType) return;

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const arrayBuffer = event.target.result;
        launchEmulator(consoleType, arrayBuffer);
      };
      reader.readAsArrayBuffer(selectedFile);
    } else if (selectedRomUrl) {
      fetch(selectedRomUrl)
        .then(res => res.arrayBuffer())
        .then(buffer => launchEmulator(consoleType, buffer));
    }
  });

  function launchEmulator(consoleType, romBuffer) {
    const emulatorContainer = document.getElementById("emulatorContainer");
    emulatorContainer.innerHTML = `<p>Launching ${consoleType.toUpperCase()} emulator...</p>`;
    // TODO: Insert emulator logic based on consoleType
    // For example: if (consoleType === 'nes') startNesEmulator(romBuffer);
  }
});
