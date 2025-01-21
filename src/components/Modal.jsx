import { createPortal } from "react-dom";
import Button from "./Button";
const Modal = ({ children, ref, caption }) => {
  return createPortal(
    <dialog
      ref={ref}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form action="" method="dialog" className="mt-4 text-right">
        <Button>{caption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
};

export default Modal;
