import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-custom-gray py-[50px]">
      <div className="mt-10 lg:mt-0 flex flex-col items-center gap-2 text-sm font-medium text-white">
        <p className="">Contact Information</p>
        <div className="mt-3 flex items-center gap-3">
          {/* <FaPhone /> <a href="tel:01743136127">01743136127</a> */}
          <FaPhone />
          <a href="https://api.whatsapp.com/send?phone=+8801743136127">
            +8801743136127
          </a>
        </div>
        <div className=" flex items-center gap-3">
          <FaEnvelope />
          <a href="mailto:rana.buddy@gmail.com">rana.buddy@gmail.com</a>
          {/* <p>rana.buddy@gmail.com</p> */}
        </div>
        <div className=" flex items-center gap-3">
          <FaLocationArrow />
          <p>41/14-A Afsar Uddin Lane,1209, Zigatola -Dhaka</p>
        </div>
      </div>
      <p className="mt-8 text-xs text-white text-center pr-10">
        &copy; 2022 Shannon It. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
