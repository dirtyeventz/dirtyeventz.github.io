import { useState } from "react";
import Computer from "./components/Computer";
import styled from "styled-components";
import button_pressed from "./assets/buttons/button_pressed.png";
import button_unpressed from "./assets/buttons/button_unpressed.png";
import liquid from "./assets/liquid.gif";
import circuits from "./assets/circuits.png";

const Console = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${liquid});
  background-position: center;
  z-index: 1;
`;

const Circuits = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${circuits});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  filter: opacity(0.5);
  z-index: 0;
`;

const DoomsdayButton = styled.button`
  position: absolute;
  bottom: 200px;
  margin: auto;
  left: 50%;
  transform: translateX(-50%);
  background-color: transparent;
  border: none;
`;

const DoomsdayButton_img = styled.img`
  width: 250px;
  height: auto;
`;

function App() {
  const [pressed, setPressed] = useState<boolean>(false);

  return (
    <>
      <Console>
        <Circuits />
        <Computer pressed={pressed} />
        <DoomsdayButton onClick={() => setPressed(true)}>
          {pressed ? (
            <DoomsdayButton_img src={button_pressed} />
          ) : (
            <DoomsdayButton_img src={button_unpressed} />
          )}
        </DoomsdayButton>
      </Console>
    </>
  );
}

export default App;
