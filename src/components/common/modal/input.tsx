import styled from "styled-components";
import { secondary, primary } from "constants/colors";
import { small } from "constants/breakpoints";

export const Input = styled.input`
  margin-top: 10px;
  letter-spacing: 1px;
  width: 100%;
  margin: auto;
  font-size: 14px;
  border: none;
  padding: 15px;
  background-color: ${secondary};
  border-radius: 20px;
  color: ${primary};
  @media (max-width: ${small}) {
    padding: 7px;
    border-radius: 10px;
  }
  ::placeholder {
    color: #999;
  }
  &:focus {
    outline: none;
  }
`;
