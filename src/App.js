import { useEffect } from "react";
import styled from "styled-components";
import HearRating from "./Components/HeartRating";

const Body = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const StarContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  useEffect(() => {
    console.log("app.js useeffect");
  }, []);

  return (
    <Body>
      <HearRating />
    </Body>
  );
}

export default App;
