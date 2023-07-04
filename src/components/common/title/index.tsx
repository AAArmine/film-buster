import { FC } from "react";
import styled from "styled-components";
import { main } from "constants/colors";
import { TextPropsType } from "types/general";
import { medium, small } from "constants/breakpoints";

const TitleContainer = styled.h1`
  color: ${main};
  font-size: 30px;
  text-transform: uppercase;
  @media (max-width: ${medium}) {
    font-size: 22px;
  }
  @media (max-width: ${small}) {
    font-size: 16px;
  }
`;

const Title: FC<TextPropsType> = ({ text }) => {
  return <TitleContainer>{text}</TitleContainer>;
};

export default Title;
