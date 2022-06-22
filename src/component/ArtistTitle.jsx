import React from 'react';
import style from '../component/style/ArtTitStyle.module.css'

function ArtistTitle(props) {
  return (
    <div className={style.artistTitle}>
      <img className={style.imgArtist} src={props.urlImg} width={200} height={200}/>
      <h2 className={style.titleh2}>{props.title}</h2>
    </div>
  );
}

export default ArtistTitle;