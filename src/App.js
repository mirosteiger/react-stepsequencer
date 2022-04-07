import React from "react";
import {
  Wrapper,
  Header,
  SequencerWrapper,
  CustomToggle,
  ToggleIcon,
} from "./styles/styles";
import { Sequencer } from "./components/Sequencer";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { useStore } from "./store/zustand";
import Sun from "./assets/image/sun.png"
import Moon from "./assets/image/moon.png"

const App = () => {
  const isDarkmode = useStore((state) => state.isDarkmode);
  const switchTheme = useStore((state) => state.switchTheme);

  return (
    <ThemeProvider theme={isDarkmode ? darkTheme : lightTheme}>
      <div>
        <Wrapper>
          <Header>
            <CustomToggle onClick={switchTheme}>
              <ToggleIcon src={isDarkmode ? Sun : Moon} />
            </CustomToggle>
          </Header>
          <SequencerWrapper>
            <Sequencer />
          </SequencerWrapper>
        </Wrapper>
      </div>
    </ThemeProvider>
  );
};

export default App;
