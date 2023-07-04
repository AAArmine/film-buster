import styled from "styled-components";
import logo from "assets/images/logo-white.png";
import { useNavigate } from "react-router-dom";

export const LogoWrapper = styled.div`
  cursor: pointer;
  li {
    display: flex;

    img {
      width: 60px;
      margin-right: 5px;
    }

    span {
      display: block;
      font-size: 21px;
      font-weight: 100;
      line-height: 23px;

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
