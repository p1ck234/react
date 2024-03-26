import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => (props.$highlighted ? "yellow" : "#4caf50")};
  color: ${(props) => (props.$highlighted ? "red" : "white")};
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.$highlighted ? "orange" : "#45a049")};
  }
`;

export const DangerButton = styled(Button)`
  background-color: red;
  &:hover {
    background-color: darkred;
  }
`;
