import styled from "styled-components";
import { medium } from "constants/breakpoints";

export const AdditionalDataCont = styled.div`
  margin-top: 30px;
  font-size: 14px;
  font-weight: 700;
  p {
    @media (max-width: ${medium}) {
      text-align: center;
    }
  }
  .addDataItem {
    padding-top: 25px;
  }
`;
