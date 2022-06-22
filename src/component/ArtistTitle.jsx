import React from 'react';

function ArtistTitle(props) {
  return (
    <div style={props.style}>
      <img src={props.urlImg} width={200} height={200}/>
      <h2>{props.title}</h2>

    </div>
  );
}

export default ArtistTitle;