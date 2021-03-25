import { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { OptionButton } from "../Option/option";

import "./welcomeModal.css";

export const WelcomeModal = () => {
  // Welcome popup for first interaction
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div data-augmented-ui="tl-clip br-clip border" className="welcome-modal">
      <div style={{ display: "flex" }}>
        <div className="modal-title" data-augmented-ui="tl-clip br-clip inlay">
          Attention
        </div>
      </div>
      <div className="disclaimer">
        This game contains flashing lights amd flickering screen which may cause
        discomfort. For the full experience, turn on sounds so you can hear the
        audio from the game. <br />
        <br />
        <i>
          *Disclaimer: All scenarios are hypothetical and in no way related to
          any real life character*
        </i>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <OptionButton onClick={handleClose} className="start-button">
          ACCEPT
        </OptionButton>
      </div>
    </div>
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      BackdropProps={{ className: "backdrop" }}
    >
      {body}
    </Modal>
  );
};
