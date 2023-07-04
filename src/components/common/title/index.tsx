import { FC } from "react";
import styled from "styled-components";
import { main } from "constants/colors";
import { TextPropsType } from "types/general";

const TitleContainer = styled.div`
  color: ${main};
  font-size: 30px;
  text-transform: uppercase;
`;

const Title: FC<TextPropsType> = ({ text }) => {
  return <TitleContainer>{text}</TitleContainer>;
};

export default Title;
