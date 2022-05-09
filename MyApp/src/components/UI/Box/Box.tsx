import styled from "@emotion/native";

export const Box = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 100%;
  border: 5px;
  width: 90%;
  margin: auto;
  max-width: 22em;
  position: relative;
  padding: 30% 2em;
  box-sizing: border-box;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -5px; /* !importanté */
    border-radius: 8px; /* !importanté */
    background: linear-gradient(to right, red, orange);
  }
`
