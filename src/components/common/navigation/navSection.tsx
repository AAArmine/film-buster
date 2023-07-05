import styled from "styled-components";
import { secondary } from "constants/colors";

type StyledSectionProps = {
  scrolled: string;
};

export const StyledSection = styled.section<StyledSectionProps>`
  position: fixed;
  z-index: 2;
  top: 0;
  width: 100%;
  transition: background-color 1s ease;
  background-color: ${({ scrolled }) =>
    scrolled === "scroll" ? secondary : "#0606064f"};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.692);
`;
