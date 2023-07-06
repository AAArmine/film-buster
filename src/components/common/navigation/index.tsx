import { NavItemsCont } from "./navItemsCont";
import { NavContainer } from "./navContainer";
import Logo from "../logo/logo";
import Button from "components/common/button";
import { useEffect, useState } from "react";
import { StyledSection } from "./navSection";
import Modal from "components/common/modal";
import MobileNavigation from "./mobileNav";
import { Block } from "../block";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    const topSection = document.getElementById("topHome");
    topSection?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll: EventListener = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <StyledSection scrolled={scrolled ? "scroll" : ""}>
      <nav>
        <Block>
          <NavContainer>
            <Logo />
            <NavItemsCont>
              <li
                onClick={() => {
                  navigate("/");
                  scrollToTop();
                }}
              >
                HOME
              </li>
              <li onClick={scrollToContact}>CONTACT</li>
              <Button text="Subscribe" onClick={showModal} />
              <Modal
                onOk={handleOk}
                onCancel={() => setIsModalOpen(false)}
                open={isModalOpen}
                closable={true}
                text="Subscribe to get our weekly newsletters"
                title="Subscribe!"
              />
            </NavItemsCont>
            <MobileNavigation showModal={showModal} />
          </NavContainer>
        </Block>
      </nav>
    </StyledSection>
  );
};

export default Navigation;
