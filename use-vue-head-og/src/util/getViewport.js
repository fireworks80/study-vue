import isMobile from './checkUserAgent'
import { cloneDeep } from 'lodash'

export function getViewport(defaultMetaInfo) {
  const newMetaInfo = cloneDeep(defaultMetaInfo)
  if (newMetaInfo.meta) {
    newMetaInfo.meta.push({
      name: 'viewport',
      content: isMobile()
        ? {
            name: 'viewport',
            content:
              'width=720, user-scalable=yes, target-densitydpi=device-dpi;'
          }
        : { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
    })
  }
  return newMetaInfo
}
