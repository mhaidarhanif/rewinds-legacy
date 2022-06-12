import { Dialog } from "@reach/dialog";
// import "@reach/dialog/styles.css";
import VisuallyHidden from "@reach/visually-hidden";

import { useState } from "~/hooks";

export const DialogExampleReach = () => {
  const [showDialog, setShowDialog] = useState(false);

  const open = () => {
    return setShowDialog(true);
  };
  const close = () => {
    return setShowDialog(false);
  };

  return (
    <div>
      <button type="button" onClick={open}>
        Open Dialog
      </button>

      <Dialog isOpen={showDialog} onDismiss={close}>
        <button type="button" className="close-button" onClick={close}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>×</span>
        </button>
        <p>Hello there. I am a dialog</p>
      </Dialog>
    </div>
  );
};
