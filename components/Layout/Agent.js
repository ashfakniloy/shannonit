import {
  FaPhoneAlt,
  FaUserCircle,
  FaTimes,
  FaAngleDown,
  FaAngleUp,
  FaTelegram,
  FaWhatsapp,
  FaViber,
  FaFacebookMessenger,
} from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Agent() {
  const [showAgent, setShowAgent] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  const circle = {
    initial: {
      borderRadius: 50,
    },
    animate: {
      borderRadius: 5,
    },
    exit: {
      borderRadius: 50,
    },
  };

  const fade = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      className="fixed bottom-10 left-4 lg:left-10 cursor-pointer bg-white shadow-lg overflow-hidden"
      layout
      variants={circle}
      initial="initial"
      animate={showAgent ? "animate" : "initial"}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div
        key={showAgent}
        variants={fade}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence>
          {!showAgent ? (
            <div
              className="z-20 p-5 text-4xl rounded-full font-extrabold text-custom-orange hover:text-opacity-70"
              onClick={() => setShowAgent(!showAgent)}
            >
              <FaPhoneAlt />
            </div>
          ) : (
            <motion.div>
              <div
                className="absolute top-2 right-2 text-lg text-slate-700 hover:text-custom-orange duration-300"
                onClick={() => {
                  setShowAgent(false);
                  setShowIcons(false);
                }}
              >
                <FaTimes />
              </div>
              <div className="flex flex-col items-center gap-1 px-20 pt-8 pb-8">
                <div className="text-custom-orange text-7xl">
                  <FaUserCircle />
                </div>
                <h1 className="heading-sm">Shannon It</h1>
                <p className="text-xs">Agent</p>
                <div className="flex items-center text-custom-orange cursor-pointer hover:text-black duration-300">
                  <FaPhoneAlt className="mr-1 text-xs" />
                  <a
                    href="https://api.whatsapp.com/send?phone=+8801743136127"
                    className="text-sm"
                  >
                    +8801743136127
                  </a>
                </div>
                <div className="absolute py-1 flex justify-center w-full bg-white bottom-0 ">
                  <div
                    className={`text-2xl text-slate-600 hover:text-custom-orange duration-300 ${
                      showIcons && "rotate-180"
                    }`}
                    onClick={() => setShowIcons(!showIcons)}
                  >
                    <FaAngleDown />
                    {/* {!showIcons ? <FaAngleDown /> : <FaAngleUp />} */}
                  </div>
                </div>
              </div>

              <AnimatePresence>
                <motion.div
                  key={showIcons}
                  initial={{ height: 0 }}
                  animate={showIcons ? { height: "auto" } : { height: 0 }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div className="border-t px-6 pt-5 pb-8  flex justify-between gap-3 text-4xl">
                    <div className="text-blue-400 hover:opacity-70 duration-300">
                      <FaTelegram />
                    </div>
                    <div className="text-green-500 hover:opacity-70 duration-300">
                      <FaWhatsapp />
                    </div>
                    <div className="text-blue-700 hover:opacity-70 duration-300">
                      <FaViber />
                    </div>
                    <div className="text-blue-500 hover:opacity-70 duration-300">
                      <FaFacebookMessenger />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default Agent;
