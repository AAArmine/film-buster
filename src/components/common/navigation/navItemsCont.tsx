import styled from "styled-components";
import { alternative } from "constants/colors";

export const NavItemsCont = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  text-align: right;
  cursor: pointer;
  align-items: center;
  font-family: Coolvetica;
  letter-spacing: 2px;
  @media (max-width: 1024px) {
    display: none;
  }
  li {
    display: block;
    width: 150px;
    transition: color 0.5s ease, transform 0.2s ease;
    a.active {
      color: ${alternative};
      text-decoration: none;
    }
  }
  li:hover {
    color: ${alternative};
    transform: scale(0.95);
  }
  button {
    margin-left: 30px;
  }
`;
