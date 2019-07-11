import isMobile from './checkUserAgent'

export function getOgData (ogArr) {
  const newOg = [...ogArr]

  newOg.push(
    isMobile()
      ? {
        name: 'viewport',
        content: 'width=720, user-scalable=yes, target-densitydpi=device-dpi;'
      }
      : { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  )

  return newOg
}
