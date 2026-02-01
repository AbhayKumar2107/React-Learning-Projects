import styled from "styled-components";

// Complete the below given ButtonView style Component

export const ButtonView = styled.button`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: ${(props) => (props.filled) ? props.bg : "#fff"};
  color: ${(props) => (props.filled) ? props.color : "#000"};
  border:${(props) => (props.filled) ? "none" : "3px solid #000"};
  width: 200px;
  height: 40px;
`;
