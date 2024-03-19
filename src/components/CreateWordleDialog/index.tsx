import React from 'react';
import { Modal } from "./styles";

interface IProps {
  open: boolean;
  onClose: (arg: boolean) => void;
}

export default function CreateWordle({
  open,
  onClose,
}: React.PropsWithChildren<IProps>) {

  return (
    <Modal
        isOpen={open}
        onRequestClose={() => onClose(false)}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button onClick={() => onClose(false)}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
  );
}
