import { useState } from "react";
import Modal from "../common/Modal";

function Contact() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-[url('/images/banner.jpg')] bg-fixed">
      <div className="lg:container lg:flex justify-end py-16 lg:py-40">
        <div className="lg:w-1/2">
          <h2 className="text-[20px] lg:text-[32px] px-10 lg:px-20 text-center leading-snug text-white font-Montserrat">
            Brings your site to life in a powerful painless way
          </h2>
          <p className="mt-8 px-8 lg:px-0 text-white text-center">
            After take a deep research of business, we know exactly what
            elements your website would need to get the best performance. That`s
            why a website made by our team will be your most satisfied purchase.
          </p>
          <div className="flex justify-center mt-6 lg:mt-8">
            <button
              className="py-3 lg:py-4 px-8 lg:px-14 bg-white hover:bg-custom-orange duration-300 text-custom-gray text-sm font-bold font-Montserrat rounded-full uppercase"
              onClick={() => setShowModal(true)}
            >
              contact us
            </button>
          </div>
        </div>
      </div>

      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default Contact;
