import { useState } from "react";
import Modal from "@material-ui/core/Modal";

export const WelcomeModal = () => {
  // Welcome popup for first interaction
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </div>
  );

  return (
    <Modal open={open} onClose={handleClose}>
      {body}
    </Modal>
  );
};
