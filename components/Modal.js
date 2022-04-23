import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

function Modal({ showModal, setShowModal }) {
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

          <div className="p-2 text-center">
            <h2 className="heading-lg">Request a callback</h2>
            <p className="mt-6 text-sm font-Poppins text-custom-gray3">
              We can call you in 30 seconds, just enter your number below
            </p>

            <form
              className="mt-6 flex flex-col items-center gap-3"
              onSubmit={handleRequest}
            >
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name *"
                className="p-2 w-[300px] lg:w-[500px] border-b-2 border-custom-orange outline-none"
              />
              <input
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Phone *"
                className="p-2 w-[300px] lg:w-[500px] border-b-2 border-custom-orange outline-none"
              />
              <div className="mx-auto">
                <button className="mt-8 lg:mt-8 py-4 lg:py-4 px-5 lg:px-10 bg-custom-orange hover:bg-red-500  duration-300 text-custom-gray4 text-sm font-Montserrat rounded-full uppercase">
                  request
                </button>
              </div>
            </form>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default Modal;
