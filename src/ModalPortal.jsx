import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";
const ModalPortal = ({ children, closePortal }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  if (mounted) {
    return createPortal(
      <div className="modal">
        <div className="modal-background" onClick={closePortal} />
        <div className="modal-content">
          <div className="modal-content__close">
            <button onClick={closePortal}>x</button>
          </div>
          <div className="modal-content__main">{children}</div>
        </div>
      </div>,
      document.body
    );
  }
  return null;
};

export default ModalPortal;
