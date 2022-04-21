import { useState } from "react";
import { MdPhoneInTalk, MdEmail, MdLocationPin } from "react-icons/md";
// import Image from "next/image";

function ContactInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  return (
    <div className="bg-white">
      <div className="lg:container py-16 px-4 lg:py-44">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="lg:self-center">
            <h1 className="heading-lg">Contact Information</h1>
            <p className="mt-4 lg:mt-6 text-custom-gray3">
              Just make one call and get a reply within one minute. If email is
              the preferable way of communication for you, you are welcome to
              contact us just right now. Your personal manager will take into
              consideration all your requires with pleasure.
            </p>
            <div className="flex flex-col gap-7 lg:gap-10 mt-7 lg:mt-10  text-custom-gray3">
              <div className="flex items-center gap-5 ">
                <MdPhoneInTalk className="text-4xl fill-custom-orange" />
                {/* <Image
                  src="/images/contact/phone.png"
                  alt=""
                  width={38}
                  height={35}
                /> */}
                <p>01743136127</p>
              </div>
              <div className="flex items-center gap-5 ">
                <MdEmail className="text-4xl fill-custom-orange" />

                {/* <Image
                  src="/images/contact/message.png"
                  alt=""
                  width={38}
                  height={28}
                /> */}
                <p>rana.buddy@gmail.com</p>
              </div>
              <div className="flex items-center gap-5 ">
                <MdLocationPin className="text-4xl fill-custom-orange" />
                {/* <Image
                  src="/images/contact/location.png"
                  alt=""
                  width={38}
                  height={35}
                /> */}
                <p>41/14-A Afsar Uddin Lane,1209, Zigatola - Dhaka</p>
              </div>
            </div>
          </div>

          <div className="lg:place-self-end border-[16px] border-[#dfddce] p-6 lg:p-10">
            <div className="text-center heading-lg leading-snug lg:text-[26px]">
              <h1>Have questions?</h1>
              <h1>We call you back!</h1>
            </div>

            <form
              className="mt-3 flex flex-col items-center text-sm text-custom-gray3"
              onSubmit={handleMessageSubmit}
            >
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name *"
                className="w-full lg:w-[360px] outline-none py-2 border-b-2 border-gray-300 focus:border-red-500 "
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email *"
                className="mt-3 w-full lg:w-[360px] outline-none py-2 border-b-2 border-gray-300 focus:border-red-500 "
              />
              <textarea
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message *"
                rows="3"
                className="mt-3 w-full lg:w-[360px] outline-none py-2 border-b-2 border-gray-300 focus:border-red-500 resize-none"
              />

              <button
                type="submit"
                className="mt-7 lg:mt-9 bg-custom-orange text-white px-5 lg:px-8 py-3 rounded-full uppercase"
              >
                send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
