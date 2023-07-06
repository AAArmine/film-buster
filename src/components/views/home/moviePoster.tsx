import styled from "styled-components";
import { large, medium, small } from "constants/breakpoints";
import { main } from "constants/colors";

export const MoviePoster = styled.li`
  width: 17%;
  height: 300px;
  background-position: center;
  background-size: cover;
  margin-bottom: 100px;
  position: relative;
  border: 1px solid rgba(186, 186, 187, 0.267);
  cursor: pointer;
  &:hover div {
    visibility: visible;
  }
  .noImage {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .viewCont {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(31, 20, 128, 0.267);
    visibility: hidden;
    transition: visibility 0.2s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 20px;
      border-radius: 15px;
      background-color: ${main};
      width: 80px;
      font-size: 14px;
      letter-spacing: 2px;
      box-shadow: 2px 2px 9px black;
    }
  }
  @media (max-width: ${large}) {
    height: 180px;
  }
  @media (max-width: ${medium}) {
    width: 45%;
    height: 300px;
  }
  @media (max-width: ${small}) {
    width: 47%;
    height: 200px;
  }
`;
