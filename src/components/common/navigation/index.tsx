import { NavItemsCont } from "./navItemsCont";
import { NavContainer } from "./navContainer";
import Logo from "../logo/logo";
import Button from "components/common/button";
import { useEffect, useState } from "react";
import { StyledSection } from "./navSection";
import Modal from "components/common/modal";
import MobileNavigation from "./mobileNav";

const Navigation = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
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
        <NavContainer>
          <Logo />
          <NavItemsCont>
            <li>HOME</li>
            <li>LATEST</li>
            <li>CONTACT</li>
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
          <MobileNavigation />
        </NavContainer>
      </nav>
    </StyledSection>
  );
};

export default Navigation;
