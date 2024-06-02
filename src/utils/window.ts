export function prefersDarkMode() {
  return window?.matchMedia?.('(prefers-color-scheme: dark)').matches
}

export function getInnerWidth() {
  return window?.innerWidth
}
