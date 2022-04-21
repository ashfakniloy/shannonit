import Image from "next/image";
import Layout from "../components/Layout";
import { staffs } from "../data/staffs";

function ourTeamPage() {
  const title = "Our team page";
  const heading = "Our Team";
  const text = "Beautifully Minimal";

  return (
    <Layout title={title} heading={heading} text={text}>
      <div className="bg-custom-gray4">
        <div className="lg:container px-4 py-16 lg:py-[190px] ">
          <div className="grid lg:grid-cols-5 gap-7 lg:gap-5">
            {staffs.map((staff) => (
              <div
                key={staff.id}
                className="flex flex-col items-center gap-4 lg:gap-5 mb-8"
              >
                <Image src={staff.img} alt="" width={280} height={340} />
                <h3 className="text-lg font-Montserrat text-custom-gray lg:heading-lg">
                  {staff.name}
                </h3>
                <p className="text-sm text-center text-custom-gray3">
                  {staff.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ourTeamPage;

// import React from "react";

// function team() {
//   return <div>team</div>;
// }

// export default team;
