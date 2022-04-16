import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <h1>What's the Lyrics?</h1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
