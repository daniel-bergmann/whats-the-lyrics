import React, { useState, useEffect } from "react";
import styled from "styled-components";

// +++++++++++++++++++++++++++++++++++++++++
// Components
// ++++

import Form from "./components/form";
import Header from "./components/header";
import Lyrics from "./components/lyrics";

function App() {
  // +++++++++++++++++++++++++++++++++++++++++
  // setting the state for the onhandlers and API request.
  // ++++

  // For the API
  const [data, setData] = useState([]);
  // For the inputs
  const [artist, setArtist] = useState("Nick Cave");
  const [song, setSong] = useState("Red Right Hand");
  // For the error handling - false = no value in form
  const [submitted, setSubmitted] = useState(false);

  // +++++++++++++++++++++++++++++++++++++++++
  // Here the API fetch function get called and each time the user changes the search query the app automatically calls the API. The submit button is just for UX reasons.
  // +++

  useEffect(() => {
    const getLyrics = async () => {
      const lyricsFromServer = await getApiData();
      setData(lyricsFromServer);
    };
    getLyrics();
  }, [artist, song]);

  // +++++++++++++++++++++++++++++++++++++++++
  // The API in use is located in a .env file to keep the data source a secret. It returns the data so we can use it throughout the app.
  // +++

  const getApiData = async () => {
    const res = await fetch(`${process.env.REACT_APP_API}${artist}/${song}`);
    const apiData = await res.json();
    return apiData;
  };

  // +++++++++++++++++++++++++++++++++++++++++
  //  The submit button is there just for UX reasons.
  // +++

  const SubmitButton = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Container>
      <Header />
      <Form
        submitted={submitted}
        artist={artist}
        setArtist={setArtist}
        song={song}
        setSong={setSong}
        SubmitButton={SubmitButton}
      />
      <Lyrics data={data} />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
