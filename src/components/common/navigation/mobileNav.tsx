import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HamburgerButton } from "./hamburgerButton";
import { MobileMenu } from "./mobileMenu";

const MobileNavigation = () => {
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
        <li>
          CONTACT <AiOutlineArrowRight />
        </li>
      </MobileMenu>
    </>
  );
};

export default MobileNavigation;
