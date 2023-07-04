import styled from "styled-components";
import { secondary, primary } from "constants/colors";

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
  ::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
  }
`;
