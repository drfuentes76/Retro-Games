
import { loadNES } from './nes-loader.js';
import { loadSNES } from './snes-loader.js';
import { loadGB } from './gb-loader.js';
import { loadGBA } from './gba-loader.js';
import { loadGenesis } from './genesis-loader.js';
import { loadN64 } from './n64-loader.js';

export function launchEmulator(consoleType, romBuffer) {
  const container = document.getElementById('emulatorContainer');
  switch (consoleType) {
    case 'nes': return loadNES(romBuffer, container);
    case 'snes': return loadSNES(romBuffer, container);
    case 'gb': return loadGB(romBuffer, container);
    case 'gba': return loadGBA(romBuffer, container);
    case 'genesis': return loadGenesis(romBuffer, container);
    case 'n64': return loadN64(romBuffer, container);
    default:
      container.innerHTML = '<p>⚠️ Unsupported console selected.</p>';
  }
}
