import styled from "styled-components";
import { large, medium, small } from "constants/breakpoints";
import { secondary } from "constants/colors";

export const SearchInput = styled.input`
  width: 100%;
  padding: 17px;
  background-color: ${secondary};
  margin-bottom: 15px;
  font-size: 15px;
  &::placeholder {
    font-size: 16px;
    @media (max-width: ${medium}) {
      font-size: 12px;
    }
    @media (max-width: ${small}) {
      font-size: 11px;
    }
  }
  &:focus {
    outline: none;
  }
  @media (max-width: ${large}) {
    padding: 15px 12px;
  }
  @media (max-width: ${small}) {
    padding: 10px 7px;
  }
`;
