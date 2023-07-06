import styled from "styled-components";
import { medium, small, large } from "constants/breakpoints";
import { secondaryTitle } from "constants/colors";

export const MovieDataContainer = styled.section`
  padding: 180px 0 100px;
  h2 {
    @media (max-width: ${medium}) {
      text-align: center;
    }
  }
  .content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    .poster {
      width: 30%;
      height: 450px;
      background-position: center;
      background-size: cover;
      @media (max-width: ${large}) {
        height: 400px;
      }
      @media (max-width: ${medium}) {
        height: 350px;
        width: 250px;
        margin: auto;
      }
      @media (max-width: ${small}) {
        height: 480px;
        width: 100%;
      }
    }
    .details {
      height: 100%;
      border-left: 3px solid ${secondaryTitle};
      margin-left: 10%;
      padding-left: 50px;
      width: 60%;
      @media (max-width: ${medium}) {
        margin-left: 2%;
        width: 100%;
        margin-top: 50px;
        padding-left: 10px;
      }
      @media (max-width: ${small}) {
        margin-left: 0%;
        width: 100%;
      }
    }
  }
  @media (max-width: ${medium}) {
    padding-top: 60px;
  }
`;
