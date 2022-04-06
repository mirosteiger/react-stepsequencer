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
import { useTheme } from "./store/zustand";

const App = () => {
  const isDarkmode = useTheme((state) => state.isDarkmode);
  const switchTheme = useTheme((state) => state.switchTheme);

  return (
    <ThemeProvider theme={isDarkmode ? darkTheme : lightTheme}>
      <div>
        <Wrapper>
          <Header>
            <CustomToggle onClick={switchTheme}>
              <ToggleIcon>{isDarkmode ? "🌞" : "🌚"}</ToggleIcon>
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
