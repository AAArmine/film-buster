import { useState } from "react";
import { SecondaryTitle } from "../title/secondaryTitle";
import { FooterMain } from "./footerMain";
import { FiMail } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import Modal from "components/common/modal";
import Logo from "../logo/logo";

const FooterContent = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  return (
    <FooterMain>
      <div className="contactCont" id="contact">
        <SecondaryTitle>Contact</SecondaryTitle>
        <p>
          5th Avenue st, manhattan <br /> New York, NY 10001
        </p>
        <p>Call us: (+01) 202 342 6789</p>
      </div>
      <div className="subscribeCont">
        <span className="subscribe" onClick={showModal}>
          SUBSCRIBE{" "}
          <span>
            <FiArrowRight />
          </span>
        </span>
        <p>
          Subscribe To Our Newsletter{" "}
          <span className="newsletter">
            <FiMail />
          </span>
        </p>
        <Logo />
        <Modal
          onOk={handleOk}
          onCancel={() => setIsModalOpen(false)}
          open={isModalOpen}
          closable={true}
          text="Subscribe to get our weekly newsletters"
          title="Subscribe!"
        />
      </div>
    </FooterMain>
  );
};

export default FooterContent;
