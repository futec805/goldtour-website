// Shared helper for MAX messenger links: copies the agency's MAX phone
// number to clipboard so visitors can immediately paste it in MAX search.
export function copyMaxNumber(phoneRaw, onCopied) {
  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(phoneRaw).catch(() => {});
  }
  if (typeof onCopied === 'function') {
    onCopied();
  }
}
