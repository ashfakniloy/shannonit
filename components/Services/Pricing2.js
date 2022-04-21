import React, { useState } from "react";
import PricingAccordion from "./PricingAccordion";

const pricing = [
  { name: "Basic Plan", price: "$24/mo" },
  { name: "Standard Plan", price: "$50/mo" },
  { name: "Pro Plan", price: "$100/mo" },
];

function Pricing() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="bg-custom-gray4">
      <div className="lg:container px-4 py-16 lg:py-40">
        <div className="text-center">
          <h1 className="heading-lg">Pricing</h1>
          <p className="text-sm text-custom-gray3">Beautifully Mininal</p>
        </div>

        <div className="mt-5 flex flex-col items-center gap-7">
          <div className="">
            <p className="font-bold text-custom-gray3 focus:text-custom-orange">
              Basic Plan
            </p>
          </div>
          <div className="">
            <p className="font-bold text-custom-gray3 focus:text-custom-orange">
              Standard Plan
            </p>
          </div>
          <div className="">
            <p className="font-bold text-custom-gray3 focus:text-custom-orange">
              Pro Plan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
