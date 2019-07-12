import isMobile from './checkUserAgent';

export function setMetaInfo(metaInfo) {
  const setViewport = isMobile()
    ? {
        name: 'viewport',
        content: 'width=720, user-scalable=yes, target-densitydpi=device-dpi;'
      }
    : { name: 'viewport', content: 'width=device-width, initial-scale=1.0' };

  const newMeta = {
    title: metaInfo.title,
    meta: [setViewport, ...metaInfo.meta]
  };

  return newMeta;
}
