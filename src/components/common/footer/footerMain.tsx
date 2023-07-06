import styled from "styled-components";
import { main, secondary } from "constants/colors";
import { medium } from "constants/breakpoints";

export const FooterMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  @media (max-width: ${medium}) {
    flex-wrap: wrap;
  }
  .contactCont {
    @media (max-width: ${medium}) {
      width: 100%;
      text-align: center;
    }
  }
  p {
    color: ${secondary};
    font-weight: 500;
    font-size: 17px;
    margin-top: 35px;
  }
  .subscribeCont {
    @media (max-width: ${medium}) {
      width: 100%;
      margin: 50px 0;
    }
    p {
      margin-top: 0;
    }
    span.subscribe {
      font-size: 24px;
      color: ${main};
      cursor: pointer;
    }
    span.subscribe span {
      position: relative;
      top: 3px;
    }
    span.newsletter {
      font-size: 25px;
      position: relative;
      top: 6px;
    }
  }
`;
