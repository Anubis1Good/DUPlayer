import React, { useState, useEffect } from 'react';
import FooterDU from '../component/FooterDU';
import HeaderDU from '../component/HeaderDU';
import ArtistTitle from './../component/ArtistTitle';


const noFound = 'notfound.jpg'
const method = 'GET'
const urlAlohha = 'https://cloud-api.yandex.net/v1/disk/resources/download?path=%2FMp3Player%2FAlohha%2Falohha.jpg&fields=href'

const headers = {
  'Accept': 'application/json',
  'Authorization': 'OAuth AQAAAAA1HLYsAADLW7CCIJv7GUv1v9u8ia5tjpM'
}
const reqParam = {
  method,
  headers
}

async function getUrlImg(url) {
  let linkImg
  await fetch(url, reqParam)
    .then(response => response.json())
    .then(json => linkImg = json.href
    )
  console.log(linkImg)
  return linkImg
}



function MainPage() {
  let imgAlohha = null
  useEffect(() => { imgAlohha = getUrlImg(urlAlohha) }, [imgAlohha])

  return (<>
    <HeaderDU />
    <main style={{ padding: '10' }}>


      <ArtistTitle title='Алохха' urlImg={imgAlohha !== null ? imgAlohha : <h1>Loading...</h1>} />
      <ArtistTitle title='Doom Uggi' urlImg={noFound} />
      <ArtistTitle title='ЖМУСЧНО' urlImg={noFound} />
      <ArtistTitle title='P.V.A.' urlImg={noFound} />
    </main>
    <FooterDU />
  </>);
}

export default MainPage;