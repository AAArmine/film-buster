import styled from "styled-components";
import { medium, small } from "constants/breakpoints";
import { secondaryTitle } from "constants/colors";

export const SecondaryTitle = styled.h2`
  color: ${secondaryTitle};
  font-size: 18px;
  text-transform: uppercase;
  @media (max-width: ${medium}) {
    font-size: 16px;
  }
  @media (max-width: ${small}) {
    font-size: 12px;
  }
`;
