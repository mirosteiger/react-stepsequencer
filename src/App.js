import { Wrapper, Header, CustomToggle, ToggleIcon } from "./styles/styles";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { useStore } from "./store/zustand";
import Sun from "./assets/image/sun.png";
import Moon from "./assets/image/moon.png";
import Mixer from "./components/utils/Mixer";
import { LoadingScreen } from "./components/misc/LoadingScreen";

const App = () => {
  const isDarkmode = useStore((state) => state.isDarkmode);
  const switchTheme = useStore((state) => state.switchTheme);
  const loading = useStore((state) => state.loading);

  return (
    <ThemeProvider theme={isDarkmode ? darkTheme : lightTheme}>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Wrapper>
          <Header>
            <CustomToggle onClick={switchTheme}>
              <ToggleIcon src={isDarkmode ? Sun : Moon} />
            </CustomToggle>
          </Header>
          <Mixer />
        </Wrapper>
      )}
    </ThemeProvider>
  );
};

export default App;
