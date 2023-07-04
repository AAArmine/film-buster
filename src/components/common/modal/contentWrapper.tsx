import styled from "styled-components";
import { secondary } from "constants/colors";

export const ContentWrapper = styled.div`
  margin: auto;
  width: 80%;
  text-align: center;
  .text {
    font-weight: bold;
    padding-top: 20px;
    color: ${secondary};
  }
  .button {
    width: 100%;
    margin: auto;
    padding-top: 8px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }
`;
