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
      {/* this will appear if the fields are empty */}
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
      {/* The button will init error handling if input is empty */}
      <button type="submit">
        <strong>Go</strong>
      </button>
    </Container>
  );
}

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30vh;

  input {
    padding: 5px 0;
    margin: 10px 0;
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

  button,
  input[type="submit"],
  input[type="reset"] {
    background: tomato;
    color: #333;
    border: 2px solid rgb(209, 209, 209);
    padding: 10px;
    margin: 20px;
    cursor: pointer;
    width: 100%;
    font-size: 1rem;
  }

  /* Larger screens */
  @media (min-width: 768px) {
    height: 40vh;
    button,
    input[type="submit"],
    input[type="reset"] {
      padding: 10px;
      width: 10%;
      font-size: 1rem;
    }

    button:hover {
      border: 2px solid #222222;
    }
  }
`;
