import styled from "styled-components";
import wtl from '../images/wtl.svg'

export default function Header() {
  return (
    <Container>
      <img src={wtl} alt="" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vh;
  img {
    width: 100%;
  }
  /* Larger screens */
  @media (min-width: 768px) {
    img {
      max-width: 50%;
    }
  }
`;
