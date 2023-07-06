import { SecondaryTitle } from "components/common/title/secondaryTitle";
import { siteAnnounce, welcome, welcomeMore } from "constants/content";
import styled from "styled-components";
import { large, medium, small } from "constants/breakpoints";
import { secondary, main } from "constants/colors";
import BackgroundImage from "components/common/backgroundImage";

export const DescriptionSecCont = styled.div`
  display: flex;
  justify-content: flex-between;
  margin: 100px 0;
  padding-bottom: 50px;
  @media (max-width: ${large}) {
    flex-wrap: wrap;
    margin: 50px 0;
  }
  .content {
    width: 35%;
    padding: 80px 30px 80px 0;
    color: ${secondary};
    h2 {
      display: inline-block;
    }
    span {
      color: ${main};
    }
    p:last-child {
      display: inline;
      margin-left: 5px;
    }
    @media (max-width: ${large}) {
      width: 100%;
      padding: 0;
      margin-bottom: 50px;
    }
    @media (max-width: ${medium}) {
    }
    @media (max-width: ${small}) {
    }
  }
  .image {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    text-align: center;
    .titleContent {
      width: 70%;
    }
    @media (max-width: ${large}) {
      width: 100%;
      padding: 10% 0;
    }
  }
`;

const DescriptionSec = () => {
  return (
    <DescriptionSecCont>
      <div className="content">
        <SecondaryTitle>WelCome to </SecondaryTitle>
        <span>{"  "}FILM BUSTER!</span>
        <p>{welcome}</p>
        <span>FILM BUSTER</span>
        <p>{welcomeMore}</p>
      </div>
      <div className="image">
        <BackgroundImage />
        <div className="titleContent">
          <SecondaryTitle>{siteAnnounce}</SecondaryTitle>
        </div>
      </div>
    </DescriptionSecCont>
  );
};

export default DescriptionSec;
