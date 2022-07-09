import React from 'react';

function ListAudio(props) {
  
  const list = props.list
const listItem = list.map((el,index)=><li key={el.public_key} onClick={props.mFunc}><span style={{display:'inline-block', padding:'0.3rem'}}>{`${index+1} `}</span>{ el.name}</li>)
  return ( <>
    <ul className='list-audio'>
      {listItem}
    </ul>
  </> );
}

export default ListAudio;