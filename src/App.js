import styled from "styled-components";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [artist, setArtist] = useState("Lady Gaga");
  const [song, setSong] = useState("Pokerface");

  useEffect(() => {
    const getLyrics = async () => {
      const lyricsFromServer = await getApiData();
      setData(lyricsFromServer);
    };
    getLyrics();
  }, [artist, song]);

  // fetch function
  const getApiData = async () => {
    const res = await fetch(`${process.env.REACT_APP_API}${artist}/${song}`);
    const apiData = await res.json();
    return apiData;
  };

  // Onchange handlers for the form
  const lookForSongHandleSubmit = (e) => {
    e.preventDefault();

    console.log(artist, song);
  };

  return (
    <Container>
      <form onSubmit={lookForSongHandleSubmit}>
        <input
          id="artist"
          placeholder={artist}
          name="artist"
          type="text"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <input
          id="song"
          placeholder={song}
          name="song"
          type="text"
          value={song}
          onChange={(e) => setSong(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
      {data.lyrics}
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
