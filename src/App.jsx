import React, { useEffect } from 'react';
import './App.css';
import TestAudio from './component/TestAudio';
import sendRequest from './func/sendReq';

const method = 'GET'
const url = 'https://cloud-api.yandex.net/v1/disk/resources?path=%2FMp3Player%2F'
const headers = {
  'Accept': 'application/json',
  'Authorization': 'OAuth AQAAAAA1HLYsAADLW7CCIJv7GUv1v9u8ia5tjpM'
}

function App() {
  useEffect(()=>{
    fetch(url,{
      method,
      headers
    })
      .then(response => response.json())
      .then(json => console.log(json))
  },[])
  return (
    <div className="App" >
     <TestAudio/>
    </div >
  );
}

export default App;