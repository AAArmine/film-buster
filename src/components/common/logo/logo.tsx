import styled from "styled-components";
import logo from "assets/images/logo-white.png";
import { useNavigate } from "react-router-dom";
import { medium, small } from "constants/breakpoints";

export const LogoWrapper = styled.div`
  cursor: pointer;
  li {
    display: flex;
    img {
      width: 55px;
      margin-right: 5px;
      @media (max-width: ${medium}) {
        width: 35px;
      }
    }

    span {
      display: block;
      font-size: 17px;
      font-weight: 100;
      line-height: 23px;
      @media (max-width: ${medium}) {
        font-size: 12px;
        line-height: 13px;
      }
      &.written {
        font-family: "La Belle Aurore";
        font-size: 14px;
      }
    }
  }
`;

const Logo = () => {
  const navigate = useNavigate();
  return (
    <LogoWrapper>
      <li
        onClick={() => {
          navigate("/");
        }}
      >
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <span>FILM</span>
          <span>BUSTER</span>
          <span className="written">Movie database</span>
        </div>
      </li>
    </LogoWrapper>
  );
};

export default Logo;
