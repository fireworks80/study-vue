import isMobile from './checkUserAgent';

export function setMetaInfo(ogArr) {
  const deviceViewport = isMobile()
    ? {
        name: 'viewport',
        content: 'width=720, user-scalable=yes, target-densitydpi=device-dpi;'
      }
    : { name: 'viewport', content: 'width=device-width, initial-scale=1.0' };

  if (ogArr.meta) ogArr.meta[ogArr.meta.length - 1] = deviceViewport;
  // console.log(test);
  // ogArr.meta = test;

  // const metaInfo = JSON.parse(JSON.stringify(ogArr));
  // console.log(ogArr.meta);

  // console.log(metaInfo);
  // newMeta.push(
  //   isMobile()
  //     ? {
  //         name: 'viewport',
  //         content: 'width=720, user-scalable=yes, target-densitydpi=device-dpi;'
  //       }
  //     : { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  // );

  return ogArr;
}
