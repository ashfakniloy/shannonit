import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

function SchoolManagementModal({ showModal, setShowModal, modalMessage }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const modalStyle = {
    minWidth: "350px",
    maxWidth: "600px",
    marginTop: "300px",
    backgroundColor: "white",
  };

  const handleRequest = (e) => {
    e.preventDefault();
    console.log(name, number);
  };

  return (
    <div>
      <Dialog
        aria-label="Message submission form"
        isOpen={showModal}
        // onDismiss={() => setShowModal(false)}
        style={modalStyle}
      >
        <div className="relative">
          <div className="absolute -top-14 -right-8">
            <button
              className="text-slate-300 hover:text-slate-50 text-lg"
              aria-label="close modal"
              onClick={() => setShowModal(false)}
            >
              <FaTimes />
            </button>
          </div>

          <div className="p-6 text-center">
            <p className="text-xl lg:text-2xl  font-Poppins text-green-600">
              {modalMessage}
            </p>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default SchoolManagementModal;
