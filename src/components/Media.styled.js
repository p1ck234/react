import styled from "styled-components";

const ResponsiveComponent = styled.div`
  background-color: lightblue;
  padding: 20px;

  @media (max-width: 768px) {
    background-color: lightgreen;
    padding: 10px;
  }
`;
