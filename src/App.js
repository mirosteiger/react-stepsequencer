import React, { useEffect } from "react";
import {
  Wrapper,
  Header,
  SequencerWrapper,
  CustomToggle,
  ToggleIcon,
  LoadingContainer,
} from "./styles/styles";
import { Sequencer } from "./components/Sequencer";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { useStore } from "./store/zustand";
import Sun from "./assets/image/sun.png";
import Moon from "./assets/image/moon.png";
import { P2 } from "./styles/styles.text";

const App = () => {
  const isDarkmode = useStore((state) => state.isDarkmode);
  const switchTheme = useStore((state) => state.switchTheme);
  const loading = useStore((state) => state.loading);

  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);

  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };

  return (
    <ThemeProvider theme={isDarkmode ? darkTheme : lightTheme}>
      {loading ? (
        <LoadingContainer>
          <P2>Loading...</P2>
        </LoadingContainer>
      ) : (
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
      )}
    </ThemeProvider>
  );
};

export default App;
