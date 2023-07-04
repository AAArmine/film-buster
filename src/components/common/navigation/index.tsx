import { NavItemsCont } from "./navItemsCont";
import { NavContainer } from "./navContainer";
import Logo from "../logo/logo";
import Button from "components/common/button";
import { useEffect, useState } from "react";
import { secondary } from "constants/colors";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(isScrolled);

  return (
    <section
      style={{
        position: "fixed", // Add the desired positioning style
        top: 0, // Position the section at the top
        width: "100%",
        transition: "background-color 1s ease",
        backgroundColor: isScrolled ? secondary : "#0606064f",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.692)",
      }}
    >
      <nav>
        <NavContainer>
          <Logo />
          <NavItemsCont>
            <li>HOME</li>
            <li>LATEST</li>
            <li>CONTACT</li>
            <Button text="Subscribe" />
          </NavItemsCont>
        </NavContainer>
      </nav>
    </section>
  );
};

export default Navigation;
