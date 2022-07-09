import React, { useState, useEffect } from "react";
import Player from "../component/Player";
import DUButton from "./../UI/DUButton";
import ListAudio from "./../component/ListAudio";
import Loader from './../UI/Loader';

const method = "GET";
// const urlAlohha =
//   "https://cloud-api.yandex.net/v1/disk/resources/download?path=%2FMp3Player%2FAlohha%2Falohha.jpg&fields=href";
const urlAllMusic =
  "https://cloud-api.yandex.net/v1/disk/resources/files?limit=1000&media_type=audio";

const headers = {
  Accept: "application/json",
  Authorization: "OAuth AQAAAAA1HLYsAADLW7CCIJv7GUv1v9u8ia5tjpM",
};

function MainPage() {
  const [arrAllMusic, setArrAllMusic] = useState([]);
  const [number, setNumber] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(urlAllMusic, {
      method,
      headers,
    })
      .then((response) => response.json())
      .then((json) => {
        setArrAllMusic(json.items);
        setLoading(true);
      });
  }, []);

  return (
    <>
      {loading ? (
        <main style={{ padding: "10" }}>
          <div className="container-list-audio">
            <ListAudio list={arrAllMusic} mFunc={() => setNumber(10)} />
          </div>
          <div className="name-audio">{arrAllMusic[number].name}</div>
          <div className="player-main">
            <DUButton
              func={() =>
                setNumber((prevValue) => {
                  if (prevValue === 0) {
                    prevValue = arrAllMusic.length - 1;
                  } else prevValue--;
                  return prevValue;
                })
              }
              sub="Back"
            ></DUButton>
            <DUButton
              func={() =>
                setNumber((prevValue) => {
                  if (prevValue === arrAllMusic.length - 1) {
                    prevValue = 0;
                  } else prevValue++;
                  return prevValue;
                })
              }
              sub="Next"
            ></DUButton>
            <Player src={arrAllMusic[number].file} />
          </div>
        </main>
      ) : (
        <Loader/>
      )}
    </>
  );
}

export default MainPage;
