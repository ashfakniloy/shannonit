import { useState } from "react";
import { serviceList } from "../data/serviceList";
import Accordion from "./Accordion";

function ServicesAccordion() {
  const [clicked, setClicked] = useState(false);
  const services = serviceList.slice(0, 4);

  return (
    <div className="bg-[url('/images/banner.jpg')]">
      <div className="lg:container lg:flex justify-end py-16 lg:py-44">
        <div className="px-4">
          <div className="border-[16px] py-7 bg-white border-[#dfddce] p-4 lg:p-10">
            <div className="text-center ">
              <h1 className="heading-lg lg:text-[26px]">Services?</h1>
              <p className="lg:mt-2 text-custom-gray3">
                Get Your Next Project Done With Us
              </p>
            </div>

            <div className="pt-4 cursor-pointer">
              {services.map((service, index) => (
                <Accordion
                  key={index}
                  index={index}
                  service={service}
                  clicked={clicked}
                  setClicked={setClicked}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesAccordion;
