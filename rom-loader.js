
document.addEventListener("DOMContentLoaded", () => {
  const romList = document.getElementById("romList");
  const romSearch = document.getElementById("romSearch");

  let allRoms = [];

  function loadRoms() {
    fetch("roms/")
      .then(response => response.text())
      .then(text => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(text, "text/html");
        const links = htmlDoc.querySelectorAll("a");
        allRoms = Array.from(links)
          .map(a => a.getAttribute("href"))
          .filter(href => href && !href.endsWith("/"))
          .map(href => decodeURIComponent(href.replace(/^.*[\/]/, "")));

        populateRomList(allRoms);
      });
  }

  function populateRomList(roms) {
    romList.innerHTML = "";
    roms.forEach(rom => {
      const option = document.createElement("option");
      option.value = "roms/" + rom;
      option.textContent = rom;
      romList.appendChild(option);
    });
  }

  romSearch.addEventListener("input", () => {
    const query = romSearch.value.toLowerCase();
    const filtered = allRoms.filter(rom => rom.toLowerCase().includes(query));
    populateRomList(filtered);
  });

  loadRoms();
});
