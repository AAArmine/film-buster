import { Block } from "../block";
import FooterContent from "./footerContent";
import { FooterSec } from "./footerSec";

const Footer = () => {
  return (
    <FooterSec>
      <div className="background" />
      <Block>
        <FooterContent />
      </Block>
      <p className="copyright">
        &copy; 2023 FilmBuster. All Rights Reserved. Designed by AAArmie.
      </p>
    </FooterSec>
  );
};

export default Footer;
