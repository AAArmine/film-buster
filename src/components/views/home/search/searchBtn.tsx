import styled from "styled-components";
import { large, small } from "constants/breakpoints";
import { secondary } from "constants/colors";

export const SearchBtn = styled.button`
  width: 150px;
  padding: 8px 14px 2px;
  background-color: ${secondary};
  border: none;
  position: absolute;
  font-size: 25px;
  cursor: pointer;
  border-left: 1px solid grey;
  right: 5px;
  top: 7px;
  &:focus {
    outline: none;
  }
  @media (max-width: ${large}) {
    padding: 12px 7px 4px;
    font-size: 18px;
    width: 100px;
  }
  @media (max-width: ${small}) {
    padding: 6px 3px 3px;
    font-size: 16px;
    width: 50px;
  }
`;
