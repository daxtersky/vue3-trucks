export function getScreenTypeByScreenWidth(screenSize: number, tailwindScreens: TailwindScreensConfig) {
  const sortedScreenTypes = Object.entries(tailwindScreens).sort((a, b) => {
    return parseInt(a[1], 10) - parseInt(b[1], 10)
  })
  let screenType = 'too small'

  for (let i = 0; i < sortedScreenTypes.length; i++) {
    if (screenSize > parseInt(sortedScreenTypes[i][1], 10)) {
      screenType = sortedScreenTypes[i][0]
    }
  }
  return screenType
}

export function uniqueNumber(uniqueId: any) {
  return parseInt(uniqueId.replace(/-/g, '').replace(/\D+/g, '').substring(0, 8), 16) + Math.floor(Math.random() * 1000)
}
