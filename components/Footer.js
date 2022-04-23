import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { MdPhoneInTalk, MdEmail, MdLocationPin } from "react-icons/md";

function Footer() {
  return (
    <div className="bg-custom-gray py-[50px]">
      <div className="mt-10 lg:mt-0 flex flex-col items-center gap-3 text-sm font-medium text-white">
        <p className="text-base">Contact Information</p>
        <div className="mt-3 flex items-center gap-2">
          <MdPhoneInTalk className="text-lg" />
          <a href="https://api.whatsapp.com/send?phone=+8801743136127">
            +8801743136127
          </a>
        </div>
        <div className=" flex items-center gap-2">
          <MdEmail className="text-lg" />
          <a href="mailto:rana.buddy@gmail.com">rana.buddy@gmail.com</a>
        </div>
        <div className=" flex items-center gap-2">
          <MdLocationPin className="text-lg" />
          <p>41/14-A Afsar Uddin Lane,1209, Zigatola - Dhaka</p>
        </div>
      </div>
      <p className="mt-14 text-xs text-white text-center pr-10">
        &copy; 2022 Shannon IT. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
