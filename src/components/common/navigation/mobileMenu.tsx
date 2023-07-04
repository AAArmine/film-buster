import styled from "styled-components";
import { main, secondary, primary } from "constants/colors";
import { medium, small } from "constants/breakpoints";

export const MobileMenu = styled.div`
  display: none;
  background: ${primary};
  color: ${secondary};
  font-size: 17px;
  font-family: Coolvetica;
  letter-spacing: 1px;
  padding: 20px;
  transition: max-height 0.3s ease;
  overflow: hidden;
  position: absolute;
  top: 97px;
  right: 0;
  width: 27%;
  border-radius: 20px;
  @media (max-width: ${medium}) {
    width: 100%;
    top: 67px;
  }
  @media (max-width: ${small}) {
    font-size: 14px;
  }
  li {
    cursor: pointer;
    transition: transform 0.3s ease, color 0.3s ease;
    &.last {
      padding-bottom: 25px;
    }
    &:hover {
      color: ${main};
      transform: scale(0.95);
    }
    svg {
      position: relative;
      top: 2px;
    }
  }
  &.open {
    display: block;
  }
`;
