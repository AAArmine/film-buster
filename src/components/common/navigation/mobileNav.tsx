import { useState, FC } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HamburgerButton } from "./hamburgerButton";
import { MobileMenu } from "./mobileMenu";
import Button from "components/common/button";
import { useNavigate } from "react-router-dom";

export type MobileNavigationPropsType = {
  showModal: () => void;
};
const MobileNavigation: FC<MobileNavigationPropsType> = ({ showModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTop = () => {
    const topSection = document.getElementById("topHome");
    topSection?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <HamburgerButton onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </HamburgerButton>
      <MobileMenu className={isMenuOpen ? "open" : ""}>
        <li
          onClick={() => {
            navigate("/");
            scrollToTop();
          }}
        >
          HOME <AiOutlineArrowRight />
        </li>
        <li className="last" onClick={scrollToContact}>
          CONTACT <AiOutlineArrowRight />
        </li>
        <Button text="Subscribe" onClick={showModal} />
      </MobileMenu>
    </>
  );
};

export default MobileNavigation;
