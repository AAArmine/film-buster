import styled from "styled-components";
import { medium } from "constants/breakpoints";

export const HomeContainer = styled.section`
  padding-top: 180px;
  @media (max-width: ${medium}) {
    padding-top: 60px;
  }
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 30px;
  }
`;
