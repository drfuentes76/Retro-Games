
import { loadNES } from './nes-loader.js';
import { loadSNES } from './snes-loader.js';
import { loadGB } from './gb-loader.js';
import { loadGBA } from './gba-loader.js';
import { loadGenesis } from './genesis-loader.js';
import { loadN64 } from './n64-loader.js';

export function launchEmulator(consoleType, romBuffer, username) {
  const container = document.getElementById('emulatorContainer');
  switch (consoleType) {
    case 'nes':
      loadNES(romBuffer, container); break;
    case 'snes':
      loadSNES(romBuffer, container); break;
    case 'gb':
      loadGB(romBuffer, container); break;
    case 'gba':
      loadGBA(romBuffer, container); break;
    case 'genesis':
      loadGenesis(romBuffer, container); break;
    case 'n64':
      loadN64(romBuffer, container); break;
    default:
      container.innerHTML = '<p>⚠️ Unsupported console selected.</p>';
  }
}
