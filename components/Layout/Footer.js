import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { MdPhoneInTalk, MdEmail, MdLocationPin } from "react-icons/md";

function Footer() {
  return (
    <div className="bg-custom-gray py-[50px]">
      <div className="px-4 mt-10 lg:mt-0 flex flex-col lg:flex-row lg:justify-around gap-10 lg:gap-0 text-sm font-medium text-white">
        <div className="flex flex-col gap-3">
          <p className="text-base">Cyprus Office</p>
          <div className="mt-2 flex items-center gap-2">
            <MdPhoneInTalk className="text-lg" />
            <a href="https://api.whatsapp.com/send?phone=+35796257724">
              +35796257724
            </a>
          </div>
          <div className=" flex items-center gap-2">
            <MdEmail className="text-lg" />
            <a href="mailto:nobinxm@gmail.com">nobinxm@gmail.com</a>
          </div>
          <div className=" flex items-center gap-2">
            <MdLocationPin className="text-lg" />
            <p>Vrisidos 23, Kapsalos, 3087, Limassol, Cyprus</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-base">Bangladesh Office</p>
          <div className="mt-2 flex items-center gap-2">
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
            <p>41/14-A Afsar Uddin Lane, 1209, Zigatola - Dhaka</p>
          </div>
        </div>
      </div>
      <p className="mt-14 text-xs text-white  text-center ">
        &copy; 2022 Shannon IT. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
