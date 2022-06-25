import React, { useState } from 'react';

function Player(props) {
  const [number, setNumber] = useState(0)
  return (
    <div>
      <span className='player-name-song'>{props.name}</span>
      <audio src={props.src} controls></audio>
    </div>
  );
}

export default Player;