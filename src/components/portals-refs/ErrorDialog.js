import { createPortal } from "react-dom";

const ErrorDialog = ({ onClose }) => {
  return createPortal(
    <>
      <div></div>
      <dialog open>
        <p>
          This form contains invalid values. Please fix those errors before
          submitting the form again!
        </p>
        <button onClick={onClose}>Okay</button>
      </dialog>
    </>
  );
};

export default ErrorDialog;
