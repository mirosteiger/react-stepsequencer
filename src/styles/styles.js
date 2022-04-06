import styled from "styled-components";

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
  justify-content: center;
  align-content: center;
  flex-basis: auto;
  flex-grow: 1;
`;

export const SequencerCase = styled.div`
  width: 80%;
  height: 80%;
  margin: auto;
  background-color: ${(props) => props.theme.material};
  border-radius: 10px;
  box-shadow: 0 0 0.8em ${(props) => props.theme.shadow}50;
  color: ${(props) => props.theme.text};
`;

export const TransportBarWrapper = styled.div`
  height: 14%;
  border-bottom: solid 1px;
`;

export const TransportItem = styled.div`
  flex-grow: 1;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: stretch;
  flex-direction: row;
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

export const ToggleIcon = styled.span`
  font-size: 100%;
`;
export const Button = styled.button`
  border-radius: 50%;
  padding: 10px;
`;

export const Select = styled.select``;
