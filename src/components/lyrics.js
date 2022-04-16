import styled from "styled-components";


export default function Lyrics({ data }) {
  return (
    <Container>
      <p>{data.lyrics}</p>
    </Container>
  );
}

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 1.5rem;
    line-height: 26pt;
  }
  p::selection {
    color: #333;
    background: tomato;
  }
  /* Larger screens */
  @media (min-width: 768px) {
    p {
      max-width: 30%;
      font-size: 1.5rem;
    }
  }
`;
