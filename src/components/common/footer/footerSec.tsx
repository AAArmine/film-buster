import styled from "styled-components";
import { primary } from "constants/colors";
import { medium } from "constants/breakpoints";
import image from "assets/images/bg-secondary.png";

export const FooterSec = styled.section`
  padding: 50px 0px 50px;
  position: relative;
  .background {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${image});
    background-size: contain;
    background-position: top;
    background-repeat: repeat-x;
    opacity: 0.1;
  }
  @media (max-width: ${medium}) {
  }
  p.copyright {
    width: 100%;
    margin: auto;
    text-align: center;
    font-weight: 600;
    font-size: 11px;
    color: ${primary};
  }
`;
