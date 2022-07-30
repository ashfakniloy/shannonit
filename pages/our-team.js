import Image from "next/image";
import Staff from "../components/common/Staff";
import Layout from "../components/Layout";
import { staffs } from "../data/staffs";

function OurTeamPage() {
  const title = "Our team page";
  const heading = "Our Team";
  const text = "Beautifully Minimal";

  return (
    <Layout title={title} heading={heading} text={text}>
      <div className="bg-custom-gray4">
        <Staff />
        {/* <div className="lg:container py-16 lg:py-[190px] ">
          <div className="grid lg:grid-cols-4 gap-6 lg:gap-x-5 lg:gap-y-6">
            {staffs.map((staff) => (
              <div
                key={staff.id}
                className="flex flex-col items-center gap-2 mb-8"
              >
                <div>
                  <Image
                    src={staff.img}
                    alt={staff.name}
                    width={280}
                    height={340}
                  />
                </div>
                <h3 className="mt-5 text-lg font-Montserrat text-custom-gray lg:heading-lg">
                  {staff.name}
                </h3>
                <p className="text-sm text-center text-custom-gray3">
                  {staff.position}
                </p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </Layout>
  );
}

export default OurTeamPage;
