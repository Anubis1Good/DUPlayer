import React, { useState, useEffect } from "react";
import FooterDU from "../component/FooterDU";
import HeaderDU from "../component/HeaderDU";
import Player from "../component/Player";
import ArtistTitle from "./../component/ArtistTitle";
import DUButton from "./../UI/DUButton";
import ListAudio from "./../component/ListAudio";

const noFound = "notfound.jpg";
const method = "GET";
const urlAlohha =
  "https://cloud-api.yandex.net/v1/disk/resources/download?path=%2FMp3Player%2FAlohha%2Falohha.jpg&fields=href";
const urlAllMusic =
  "https://cloud-api.yandex.net/v1/disk/resources/files?limit=1000&media_type=audio";

const headers = {
  Accept: "application/json",
  Authorization: "OAuth AQAAAAA1HLYsAADLW7CCIJv7GUv1v9u8ia5tjpM",
};
const reqParam = {
  method,
  headers,
};

async function getUrlImg(url) {
  let linkImg;
  await fetch(url, reqParam)
    .then((response) => response.json())
    .then((json) => (linkImg = json.href));
  console.log(linkImg);
  return linkImg;
}

async function getUrlAudio(url) {
  let linkImg;
  await fetch(url, reqParam)
    .then((response) => response.json())
    .then((json) => (linkImg = json.href));
  console.log(linkImg);
  return linkImg;
}

function MainPage() {
  const [arrAllMusic, setArrAllMusic] = useState([]);
  const [number, setNumber] = useState(0);
  const [loading, setLoading] = useState(false);

  let imgAlohha = null;
  useEffect(() => {
    imgAlohha = getUrlImg(urlAlohha);
  }, [imgAlohha]);
  useEffect(() => {
    fetch(urlAllMusic, {
      method,
      headers,
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setArrAllMusic(json.items);
        console.log(arrAllMusic);
        setLoading(true);
      });
  }, []);

  return (
    <>
      {loading ? (
        <main style={{ padding: "10" }}>
          <div className="container-list-audio">
            <ListAudio list={arrAllMusic} />
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
              sub="Reset"
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
            {arrAllMusic.length > 0 ? (
              <Player src={arrAllMusic[number].file} />
            ) : (
              <h2>Loading...</h2>
            )}
          </div>
        </main>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default MainPage;
