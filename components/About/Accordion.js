import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

function Accordion({ service, index, clicked, setClicked }) {
  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div onClick={() => toggle(index)} key={index} className="">
      <div className="border-b lg:w-[470px]">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-5">
            <div className="text-custom-orange text-xl">{service.icon}</div>
            <h1 className="heading-lg lg:text-xl hover:text-custom-orange">
              {service.name}
            </h1>
          </div>
          <div className="pr-2 text-lg text-custom-gray3 hover:text-custom-orange">
            {clicked === index ? <FaAngleDown /> : <FaAngleRight />}
          </div>
        </div>

        <AnimatePresence>
          {clicked === index && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="flex flex-col gap-7 py-4 pr-16">
                <p className="text-sm text-custom-gray3">{service.desc}</p>
                <Link href="/more" passHref>
                  <p className="link">
                    Learn more <FaAngleRight />
                  </p>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* {clicked === index ? (
          <div className="flex flex-col gap-7 py-4 pr-16 ">
            <p className="text-sm text-custom-gray3">{service.desc}</p>
            <Link href="/more">
              <p className="link">
                Learn more <FaAngleRight />
              </p>
            </Link>
          </div>
        ) : null} */}
      </div>
    </div>
  );
}

export default Accordion;
