import styled from "styled-components";
import { large } from "constants/breakpoints";
import { alternative } from "constants/colors";

export const HomeContainer = styled.section`
  padding-top: 120px;
  padding: 120px 7% 0;
  ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
    li {
      width: 17%;
      height: 250px;
      background-color: ${alternative};
    }
  }
`;
