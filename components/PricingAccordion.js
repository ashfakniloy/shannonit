import React from "react";

function PricingAccordion(index, name, price, clicked, setClicked) {
  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div>
      <div onClick={() => toggle(index)} key={index}>
        <div className="border-b lg:w-[500px]">
          <div className="">
            <div className="">
              <h1 className="heading-lg lg:text-xl hover:text-custom-gray3">
                {name}
              </h1>
            </div>
          </div>
          {clicked === index ? (
            <div className="flex flex-col gap-7 py-4 pr-16">
              <p className="text-sm text-custom-gray3">{price}</p>
              {/* <Link href="">
                <p className="link">
                  Learn more <FaAngleRight />
                </p>
              </Link> */}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default PricingAccordion;
