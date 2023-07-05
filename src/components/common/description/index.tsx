import styled from "styled-components";
import { medium } from "constants/breakpoints";
import { secondary, primary } from "constants/colors";

export const Description = styled.p`
  color: ${secondary};
  font-size: 18px;
  @media (max-width: ${medium}) {
    font-size: 12px;
    color: ${primary};
  }
`;
