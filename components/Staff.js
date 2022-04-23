import Image from "next/image";
import { staffs } from "../data/staffs";

function Staff() {
  const team = staffs.slice(0, 8);

  return (
    <div className="bg-custom-gray4">
      <div className="lg:container py-16 lg:py-[190px] ">
        <div className="text-center lg:mx-52 lg:px-28">
          <h2 className="heading-lg">Our Staff</h2>
          <p className="mt-6 mx-4 lg:mx-0 text-custom-gray3">
            We work to make your business start effectively working for you.
            Meet the financial and marketing specialists.
          </p>
        </div>

        <div className="mt-10 lg:mt-20 grid lg:grid-cols-4 gap-6 lg:gap-x-5 lg:gap-y-6">
          {team.map((staff) => (
            <div
              key={staff.id}
              className="flex flex-col items-center gap-2 mb-8"
            >
              <Image
                src={staff.img}
                alt={staff.name}
                width={280}
                height={340}
              />
              <h3 className="mt-5 text-lg font-Montserrat text-custom-gray lg:heading-lg">
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
  );
}

export default Staff;
