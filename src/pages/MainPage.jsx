import React, { useState, useEffect } from 'react';
import FooterDU from '../component/FooterDU';
import HeaderDU from '../component/HeaderDU';
import ArtistTitle from './../component/ArtistTitle';





function MainPage() {
  const method = 'GET'
  const url = 'https://cloud-api.yandex.net/v1/disk/resources?path=%2FMp3Player&fields=_embedded.items'

  const headers = {
    'Accept': 'application/json',
    'Authorization': 'OAuth AQAAAAA1HLYsAADLW7CCIJv7GUv1v9u8ia5tjpM'
  }
  const [arrAT, setArrAT] = useState([])
  const [arrATm, setArrATm] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch(url, {
      method,
      headers
    })
      .then(response => response.json())
      .then(json => {
        setArrAT(json._embedded.items)
        setLoading(false)
        setArrATm(()=>arrAT.map((el, index)=> {
          return (<ArtistTitle key={index} title={el.name} urlImg='https://downloader.disk.yandex.ru/disk/2d6b33837b743ac5ade69f1416a69a0774150e7e5be47f1410e565976e6db157/62b30e96/mONXxEsFYjWX6RpK4bIToxllbIks0-EB5-fd-VI_I4U8ONXFF6ylyZm-n03HAkf0DWv7eN_Txfxy6-bSghnVbQ%3D%3D?uid=891074092&filename=alohha.jpg&disposition=attachment&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=891074092&fsize=114192&hid=1f9ad26e0e78ec7feb7c674dbc9ba121&media_type=image&tknv=v2&etag=871fe7441c92f83b4061bc90959a31ab'/> )
        }))
      })
  }, [])
  return (<>
    <HeaderDU />
    <main style={{ padding: '10' }}>
      
      {!loading ? arrATm : <h1>Loading...</h1>}
      {/* <ArtistTitle title='Алохха' urlImg='https://downloader.disk.yandex.ru/disk/2d6b33837b743ac5ade69f1416a69a0774150e7e5be47f1410e565976e6db157/62b30e96/mONXxEsFYjWX6RpK4bIToxllbIks0-EB5-fd-VI_I4U8ONXFF6ylyZm-n03HAkf0DWv7eN_Txfxy6-bSghnVbQ%3D%3D?uid=891074092&filename=alohha.jpg&disposition=attachment&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=891074092&fsize=114192&hid=1f9ad26e0e78ec7feb7c674dbc9ba121&media_type=image&tknv=v2&etag=871fe7441c92f83b4061bc90959a31ab' />
      <ArtistTitle  title='Doom Uggi' urlImg='https://downloader.disk.yandex.ru/disk/03c6a969b8f7151b23caca1821cbe989282d00344abc4d2369e4077fb7a3997d/62b30f39/mONXxEsFYjWX6RpK4bITo-cTivkoWjERQuWZIZ4byvZ-9IXe34Xz5OjkLE30l577XFcqHax8O34Dp9FFt_ubEg%3D%3D?uid=891074092&filename=DU.jpg&disposition=attachment&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=891074092&fsize=32327&hid=8a2b27361e5ce4c7e24e3a514b765db0&media_type=image&tknv=v2&etag=397b39b806eca1beeeafd3ab0f32a9a6' />
      <ArtistTitle  title='ЖМУСЧНО' urlImg='https://downloader.disk.yandex.ru/disk/fda3270fc13f9410bb16420ce92143e1a21347752e00e73aae67c04603a8a8c3/62b30f85/mONXxEsFYjWX6RpK4bITo4FB6XebXSfGZMF1ehb8aHQLnDW0-wPMNcYBFbs5v5qfjeIfDrQMsgYLRpS0KXsZQw%3D%3D?uid=891074092&filename=JMYSCHNO.jpg&disposition=attachment&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=891074092&fsize=144327&hid=206d6f9a0fc37a0b946c2567137a7a22&media_type=image&tknv=v2&etag=dddf46b7da38d6232adb5be96e1fe835' />
      <ArtistTitle  title='P.V.A.' urlImg='https://downloader.disk.yandex.ru/disk/dbadad27d9bc5b12235d60c688abd4eb9884a8edf45949526cdbb335b8023916/62b30fcd/mONXxEsFYjWX6RpK4bITo8HpT9Lah4BCJL97NlGXiBvTnU86evF97MMHgVbhyqOPqD_L7FJ3ccz0mVtrzgefPg%3D%3D?uid=891074092&filename=PVA.jpg&disposition=attachment&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=891074092&fsize=82245&hid=8804f9a4a047e89718381acae19be983&media_type=image&tknv=v2&etag=b0640068aea990820f8f6d925c073716' /> */}
    </main>
    <FooterDU />
  </>);
}

export default MainPage;