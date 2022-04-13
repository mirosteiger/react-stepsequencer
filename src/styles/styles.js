import styled, { keyframes, css } from "styled-components/macro";

export const LoadingContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background};
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.background};
`;

export const Header = styled.header`
  width: 100vw;
  height: 10vh;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

export const SequencerWrapper = styled.div`
  width: 100vw;
  min-height: 90vh;
  justify-content: center;
`;

export const SequencerCase = styled.div`
  width: 90%;
  height: 90%;
  margin: auto;
  padding: 10px;
  background-color: ${(props) => props.theme.material};
  border-radius: 10px;
  box-shadow: 0 0 0.8em ${(props) => props.theme.shadow1}50;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.textInverse};
`;

export const TransportBarWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  padding: 0px 40px 10px 40px;
  background-color: ${(props) => props.theme.shadow};
  border-bottom: solid 2px ${(props) => props.theme.shadow};
`;

export const TransportSection = styled.div`
  height: 100%;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-start;
`;

export const TransportItemWrapper = styled.div`
  height: 100%;
  display: flex;
`;

export const FlexContainer = styled.div`
  display: flex;
  height: 100%;
`;

export const CustomToggle = styled.button`
  padding: 1rem;
  border: none;
  outline: none;
  font-size: 2rem;
  cursor: pointer;
  transition: 0.2s, all ease-in-out;
  background: none;
  color: ${(props) => props.theme.primary};
  position: absolute;
  top: 0;
  right: 0;

  &:hover {
    transition: 0.2s all ease-in-out;
  }
`;

export const ToggleIcon = styled.img`
  width: 2vw;
  height: 2vw;
`;

// TODO
export const CustomButton = styled.button`
  padding: 5px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  /* text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.66); */
  cursor: pointer;
  box-shadow: ${(props) =>
    props.active ? "inset 0 2px 2px " + props.theme.primary : "none"};
`;

// TODO
export const Select = styled.select`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 4px;
  font-size: 1.1rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.primary}50;
  transition: 0.3s ease-in-out;
  border: none;
  border-bottom: solid 1px ${(props) => props.theme.shadow};

  &:hover {
    background-color: ${(props) => props.theme.primary};
    cursor: pointer;
  }
`;

// TODO
export const Option = styled.option``;

export const SampleLabel = styled.label`
  margin-left: 0.5em;
  border: 1px solid ${(props) => props.theme.textInverse};
  display: block;
  padding: 15px;
  width: 6em;
  height: 1em;
  color: ${(props) => props.theme.textInverse};
  cursor: pointer;
`;

export const Main = styled.div`
  padding: 0px 10px 0px 0px;
  display: flex;
  height: 90%;
`;

export const TrackWrapper = styled.div`
  display: flex;
  /* border: 1px solid ${(props) => props.theme.shadow2}; */
`;

export const TrackItemWrapper = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;
  margin: 1em;
  height: 4em;
  border: 1px solid ${(props) => props.theme.secondary};
  border-radius: 4px;
`;

export const TrackButtonWrapper = styled.div`
  margin: 1em 0.3em 1em 0.5em;
  display: flex;
  flex-direction: column;
  width: 1.5em;
  height: 100%;
  justify-content: space-around;
`;

export const RoundButton = styled.button`
  border-radius: 50%;
  height: 1.5 em;
  background-color: ${(props) =>
    props.isActive ? props.activeColor : "transparent"};
  color: ${(props) => props.theme.textInverse};
  border: none;
  border: 1px solid ${(props) => props.theme.textInverse};
`;

export const ColorPanel = styled.div`
  color: ${(props) => props.theme.textInverse};
  height: 1em;
  background-color: ${(props) => props.colorCode};
`;

export const SampleWrapper = styled.div``;

export const SequenceWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0px 20px 20px;
  position: relative;
  overflow-y: scroll;
`;

export const IndicatorWrapper = styled.div`
  display: flex;
  top: 0px;
  right: 0px;
  padding: 4px 2px;
  pointer-events: none;
  border: 2px dashed white;
`;

export const Spacer = styled.div`
  display: flex;
  width: 16%;
  height: 1px;
  background-color: red ;
`;

export const StepIndicator = styled.div`
  position: absolute;
  top: 0px;
  left: ${(props) => (props.step * 96) / 2}px;
  width: 93px;
  height: 100%;
  background: ${(props) => props.theme.another};
`;

export const StepLineWrapper = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;
  margin: 1em;
  height: 4em;
  border: 1px solid ${(props) => props.theme.secondary};
  border-radius: 4px;
`;

export const StepButton = styled.button`
  flex: 1;
  background: ${(props) =>
    props.offsetColor ? props.theme.primary : props.theme.secondary};
  opacity: ${(props) => (props.on === 1 ? 1 : 0.35)};
  border-radius: 5px;
  margin: 2px;
  color: ${(props) => props.theme.textInverse};
  box-shadow: 0 0 0.3em ${(props) => props.theme.shadow1};
  ${(props) => props.doubled && flashMixin}
`;

const flash = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5
  }
`;

const flashMixin = css`
  animation: ${flash} 0.5s linear infinite;
`;
