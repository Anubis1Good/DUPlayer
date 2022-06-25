import React from 'react';
import style from '../component/style/ArtTitStyle.module.css'
import { Link } from "react-router-dom";

function ArtistTitle(props) {
  return (
    
      <Link to="/artist" style={{ display: 'inline-block', margin: '0' }}>
        <div className={style.artistTitle}>
          <img className={style.imgArtist} src={props.urlImg} width={200} height={200} />
          <h2 className={style.titleh2}>{props.title}</h2>
        </div>
      </Link>
    


  );
}

export default ArtistTitle;