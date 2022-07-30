import { useState } from "react";
import Modal from "./Modal";

function Request() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white my-auto">
      <div className="lg:container flex flex-col justify-center py-16 lg:py-40">
        <div className="">
          <h2 className="heading-lg px-10 lg:px-20 text-center">
            Lets Get Started your project
          </h2>
          <p className="mt-2 px-8 lg:px-0 text-sm text-custom-gray3 text-center">
            We will help you to achieve your goals and to grow your business.
          </p>
        </div>
        <div className="mx-auto">
          <button
            className="mt-8 lg:mt-8 py-4 lg:py-4 px-5 lg:px-10 bg-custom-orange  hover:bg-red-500  duration-300 text-custom-gray4 text-sm font-Montserrat rounded-full uppercase"
            onClick={() => setShowModal(true)}
          >
            request a quote
          </button>
        </div>
      </div>

      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default Request;
