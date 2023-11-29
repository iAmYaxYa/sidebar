import { FaTimes } from "react-icons/fa";
import { useContextElements } from "../context/AppContext";

const Modal = () => {
  const {
    elements: { isModal },
    openClose,
  } = useContextElements();
  return (
    <div className={isModal ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container">
        <h4>content</h4>
        <button
          className="close-modal-btn"
          onClick={() => openClose("isModal")}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
