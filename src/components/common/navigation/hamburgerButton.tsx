import styled from "styled-components";
import { large, medium, small } from "constants/breakpoints";

export const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: height 0s ease;
  &:hover {
    height: 18px;
    width: 33px;
  }
  @media (max-width: ${large}) {
    display: flex;
  }
  .line {
    width: 100%;
    height: 5px;
    background: #f1f0f0;
    margin-bottom: 4px;
  }
`;
