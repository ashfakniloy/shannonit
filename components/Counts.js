import React, { useState } from "react";
import CountUp, { useCountUp } from "react-countup";
import { Waypoint } from "react-waypoint";

function Counts() {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  const onVWEnter = () => {
    setViewPortEntered(true);
  };

  const counts = {
    coffee: 654,
    projects: 54,
    working_days: 569,
    clients: 236,
  };

  return (
    <div className="bg-white">
      <div className="lg:container py-16 px-4 lg:py-36">
        <Waypoint onEnter={onVWEnter}>
          <div className="grid lg:grid-cols-4 gap-4">
            <div className="text-center">
              <h1 className="text-[25px] lg:text-[55px] text-custom-orange font-Montserrat">
                {viewPortEntered && (
                  <CountUp end={counts.coffee} duration={3} />
                )}
              </h1>
              <p className="mt-1 lg:mt-2 text-sm text-custom-gray3">
                Coffee Cups
              </p>
            </div>
            <div className="text-center">
              <h1 className="text-[25px] lg:text-[55px] text-custom-orange font-Montserrat">
                {viewPortEntered && (
                  <CountUp end={counts.projects} duration={3} />
                )}
              </h1>
              <p className="mt-1 lg:mt-2 text-sm text-custom-gray3">Projects</p>
            </div>
            <div className="text-center">
              <h1 className="text-[25px] lg:text-[55px] text-custom-orange font-Montserrat">
                {viewPortEntered && (
                  <CountUp end={counts.working_days} duration={3} />
                )}
              </h1>
              <p className="mt-1 lg:mt-2 text-sm text-custom-gray3">
                Working Days
              </p>
            </div>
            <div className="text-center">
              <h1 className="text-[25px] lg:text-[55px] text-custom-orange font-Montserrat">
                {viewPortEntered && (
                  <CountUp end={counts.clients} duration={3} />
                )}
              </h1>
              <p className="mt-1 lg:mt-2 text-sm text-custom-gray3">Clients</p>
            </div>
          </div>
        </Waypoint>
      </div>
    </div>
  );
}

export default Counts;
