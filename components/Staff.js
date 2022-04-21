import Image from "next/image";
import { staffs } from "../data/staffs";

function Staff() {
  const team = staffs.slice(0, 6);

  return (
    <div className="bg-custom-gray4">
      <div className="lg:container py-16 lg:py-[190px] ">
        <div className="text-center lg:mx-52 lg:px-28">
          <h2 className="heading-lg">Our Staff</h2>
          <p className="mt-6 mx-4 text-custom-gray3">
            We work to make your business start effectively working for you.
            Meet the financial and marketing specialists.
          </p>
        </div>

        <div className="mt-10 lg:px-16 lg:mt-20 grid lg:grid-cols-3 gap-7 lg:gap-x-5 lg:gap-y-14">
          {team.map((staff) => (
            <div
              key={staff.id}
              className="flex flex-col items-center gap-2 lg:gap-5"
            >
              <Image
                src={staff.img}
                alt={staff.name}
                width={280}
                height={340}
              />
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
  );
}

export default Staff;
