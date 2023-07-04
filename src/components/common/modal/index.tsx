import { FC, useState, ChangeEvent } from "react";
import { Modal } from "antd";
import Button from "components/common/button";
import Title from "components/common/title";
import { ContentWrapper } from "./contentWrapper";
import { Input } from "./input";
import { ToastContainer, toast } from "react-toastify";

export type PromptModalPropsType = {
  title: string;
  onOk: () => void;
  onCancel: () => void;
  open: boolean;
  text: string | React.ReactNode;
  closable?: boolean;
  disabled?: boolean;
};

const ModalContent: FC<PromptModalPropsType> = ({
  title,
  onOk,
  onCancel,
  open,
  text,
}) => {
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const onSubmit = (email: string) => {
    console.log(email);
    onCancel();
    setEmail("");
    toast("You are successfully Subscribed!", {
      type: "success",
    });
  };
  const checkEmailValid = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (emailRegex.test(e.target.value)) {
      setValidEmail(true);
    }
  };

  return (
    <>
      <Modal
        open={open}
        destroyOnClose={true}
        onOk={onOk}
        closable={true}
        onCancel={onCancel}
        centered
        width={488}
        footer={null}
      >
        <ContentWrapper>
          <Title text={title} />
          <div className="text">{text}</div>
          <Input
            type="text"
            placeholder="Insert your email..."
            onChange={checkEmailValid}
            value={email}
          />
          <div className="button">
            <Button
              text="SUBMIT"
              onClick={() => onSubmit(email)}
              disabled={!validEmail}
            />
          </div>
        </ContentWrapper>
      </Modal>
      <ToastContainer
        className="toast"
        position="top-center"
        pauseOnHover
        autoClose={7000}
      />
    </>
  );
};

export default ModalContent;
