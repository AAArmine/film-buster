import styled from "styled-components";
import { medium } from "constants/breakpoints";

export const Block = styled.div`
  padding: 15px 7% 0;
  @media (max-width: ${medium}) {
    padding: 15px 5% 0;
  }
`;
