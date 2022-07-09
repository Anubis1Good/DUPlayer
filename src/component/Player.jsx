import React, { useState } from 'react';

function Player(props) {
  const [number, setNumber] = useState(0)
  return (
    <div className='player-container'>
      {/* <div className='player-name-song'>{props.name}</div> */}
      <audio src={props.src} controls></audio>
    </div>
  );
}

export default Player;