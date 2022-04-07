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
  min-height: 90vh;
  justify-content: center;
`;

export const SequencerCase = styled.div`
  width: 80%;
  height: 80%;
  margin: auto;
  background-color: ${(props) => props.theme.material};
  border-radius: 10px;
  box-shadow: 0 0 0.8em ${(props) => props.theme.shadow1}50;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.textInverse};
`;

export const TransportBarWrapper = styled.div`
  height: 8%;
  padding: 10px;
  background-color: ${(props) => props.theme.shadow};
  /* border-bottom: solid 2px; */
`;

export const TransportSection = styled.div`
  height: 100%;
  flex-grow: 1;
  /* border: 1px solid white; */
  /* justify-content: flex-start; */
  /* flex-direction: row; */
`;

export const TransportItemWrapper = styled.div`
  height: 100%;
  display: flex;
  align-content: center;
  margin: auto;
  padding-left: 2em;
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

export const ToggleIcon = styled.img`
  width: 2vw;
  height: 2vw;
`;

// TODO
export const CustomButton = styled.button`
  margin-left: 1em;
  border-radius: 30%;
  background-image: ${(props) =>
    `-webkit-linear-gradient(${props.theme.gradient1} 0%, ${props.theme.gradient2} 100%)`};
  background-image: ${(props) =>
    `-linear-gradient(${props.theme.gradient1} 0%, ${props.theme.gradient2} 100%)`};
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.66);
  box-shadow: inset 0 2px 0 rgba(255, 255, 255, 0.5),
    0 2px 2px rgba(0, 0, 0, 0.19);
  border: solid 1px #6f6f6f;
  border-bottom: solid 2px #6f6f6f;

  &:active {
    /*onClick*/
    background-image: -webkit-linear-gradient(#efefef 0%, #c5c5c5 100%);
  }
`;

// TODO
export const Select = styled.select`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 4px;
  font-size: 1.1rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.button};
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

export const Input = styled.input`
  height: 100%;
`;
