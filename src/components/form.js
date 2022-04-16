import styled from "styled-components";

export default function Form({
  SubmitButton,
  artist,
  song,
  setArtist,
  setSong,
  submitted,
}) {
  return (
    <Container onSubmit={SubmitButton}>
      <input
        id="artist"
        placeholder={artist}
        name="artist"
        type="text"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      {submitted && !artist ? <span>Please input artist name.</span> : null}
      <input
        id="song"
        placeholder={song}
        name="song"
        type="text"
        value={song}
        onChange={(e) => setSong(e.target.value)}
      />
      {submitted && !song ? <span>Please input song name.</span> : null}
      {/* <button type="submit">submit</button> */}
    </Container>
  );
}

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vh;

  input {
    padding: 10px 40px;
    margin: 10px;
    border: none;
    border-bottom: 2px solid tomato;
    background-color: #222222;
    color: rgb(209, 209, 209);
    font-size: 30px;
  }
  input:focus {
    outline: none;
    color: tomato;
  }
`;
