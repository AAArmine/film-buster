import { FC } from "react";
import { TextPropsType, FunctionPropsType } from "types/general";
import styled from "styled-components";
import { main, alternative, secondary, primary } from "constants/colors";

const Btn = styled.button`
  padding: 10px 20px;
  background-color: ${main};
  color: ${primary};
  display: block;
  border: none;
  border-radius: 30px;
  font-family: Coolvetica;
  letter-spacing: 2px;
  transition: background-color 0.5s ease, transform 0.2s ease, color 0.5s ease;
  &:hover {
    color: ${secondary};
    background-color: ${alternative};
    transform: scale(0.95);
    font-weight: bold;
  }
  &.disabled {
    background-color: grey;
    pointer-events: none;
    cursor: error;
  }
`;
type ButtonProps = TextPropsType &
  FunctionPropsType & {
    disabled?: boolean;
  };
const Button: FC<ButtonProps> = ({ text, onClick, disabled }) => {
  return (
    <Btn onClick={onClick} className={disabled ? "disabled" : ""}>
      {text}
    </Btn>
  );
};

export default Button;
