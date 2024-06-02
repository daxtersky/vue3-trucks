// import { prefersDarkMode } from './window'

export function hasNodeElementAttribute(node: string, datasetKey: string, datasetValue: string): boolean {
  if (node && datasetKey && datasetValue) {
    return document.querySelector('html')?.dataset[datasetKey] === datasetValue
  }
  return false
}

export function addNodeElementAttribute(node: string, datasetKey: string, datasetValue: string): void {
  console.info('addNodeElementAttribute')
  if (node && datasetKey && datasetValue) {
    document.querySelector('html')!.dataset[datasetKey] = datasetValue
  }
}
export function removeNodeElementAttribute(node: string, datasetKey: string, datasetValue: string): void {
  console.info('removeNodeElementAttribute')
  if (node && datasetKey && datasetValue) {
    delete document.querySelector('html')!.dataset[datasetKey]
  }
}
