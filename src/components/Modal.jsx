import { useRef } from "react";
import { useImperativeHandle } from "react";
import { forwardRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ title }, ref) {
  const modalRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        modalRef.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={modalRef}>
      <div>
        <h2>Are you sure?</h2>
        <p>Do you really want to remove this place?</p>
        <div>
          <button>Yes</button>
          <button>No</button>
        </div>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
