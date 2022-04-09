import styled from "styled-components";

export const P1 = styled.p`
  color: ${(props) => props.theme.textInverse};
  letter-spacing: 0.3em;
  margin: 0;
  padding: 0;
  font-weight: ${props => props.fontWeight} ;
  cursor: ${props => props.type === "button" ? "pointer" : "default"};
`;
export const P2 = styled.p`
  color: ${(props) => props.theme.textInverse};
  font-size: 4em;
  font-weight: 400;
  letter-spacing: 0.3em;
  margin: 0;
  padding: 0;
  font-weight: ${props => props.fontWeight} ;
  cursor: ${props => props.type === "button" ? "pointer" : "default"};
`;
