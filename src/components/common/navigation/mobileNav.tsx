import { useState, FC } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HamburgerButton } from "./hamburgerButton";
import { MobileMenu } from "./mobileMenu";
import Button from "components/common/button";

export type MobileNavigationPropsType = {
  showModal: () => void;
};
const MobileNavigation: FC<MobileNavigationPropsType> = ({ showModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <HamburgerButton onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </HamburgerButton>
      <MobileMenu className={isMenuOpen ? "open" : ""}>
        <li>
          HOME <AiOutlineArrowRight />
        </li>
        <li>
          LATEST <AiOutlineArrowRight />
        </li>
        <li className="last">
          CONTACT <AiOutlineArrowRight />
        </li>
        <Button text="Subscribe" onClick={showModal} />
      </MobileMenu>
    </>
  );
};

export default MobileNavigation;
