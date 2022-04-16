import React from "react";

export default function Form({
  SubmitButton,
  artist,
  song,
  setArtist,
  setSong,
  submitted,
}) {
  return (
    <form onSubmit={SubmitButton}>
      <input
        id="artist"
        placeholder={artist}
        name="artist"
        type="text"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      {submitted && !artist ? <span>Please put in a artist name.</span> : null}
      <input
        id="song"
        placeholder={song}
        name="song"
        type="text"
        value={song}
        onChange={(e) => setSong(e.target.value)}
        />
        {submitted && !song ? <span>Please put in a song.</span> : null}
      <button type="submit">submit</button>
    </form>
  );
}
