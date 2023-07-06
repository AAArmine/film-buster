import styled from "styled-components";
import Image from "assets/images/bg-main.jpg";

const BackgroundImage = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${Image});
  background-size: contain;
  background-position: top;
  background-repeat: repeat-x;
  opacity: 0.1;
`;
export default BackgroundImage;
