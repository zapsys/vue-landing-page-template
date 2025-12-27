// Static list of hashes you want to support via redirects
const staticHashes = ['#home', '#sobre-nos', '#servicos', '#clientes', '#contato'];

/**
 * Collects section IDs from DOM once mounted.
 */
export function getValidHashesFromDOM() {
  const sections = document.querySelectorAll('section[id]');
  return Array.from(sections).map(sec => `#${sec.id}`);
}

/**
 * Checks if a hash is valid either because:
 *  - it's in the static redirect list
 *  - it's found in the DOM
 */
export function isValidHash(hash) {
  const domHashes = getValidHashesFromDOM();
  return staticHashes.includes(hash) || domHashes.includes(hash);
}