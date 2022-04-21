import { useState } from "react";
import Image from "next/image";

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
            <div className="flex flex-col gap-7 lg:gap-10 mt-7 lg:mt-10 w-[240px] text-custom-gray3">
              <div className="flex items-center gap-8 ">
                <Image
                  src="/images/contact/phone.png"
                  alt=""
                  width={38}
                  height={35}
                />
                <p>(123) 456-7890</p>
              </div>
              <div className="flex items-center gap-8 ">
                <Image
                  src="/images/contact/message.png"
                  alt=""
                  width={35}
                  height={28}
                />
                <p>mail@demolink.org</p>
              </div>
              <div className="flex items-center gap-8 ">
                <Image
                  src="/images/contact/location.png"
                  alt=""
                  width={60}
                  height={60}
                />
                <p>6036 Richmond hwy., Alexandria, VA 22303</p>
              </div>
            </div>
          </div>

          <div className="lg:place-self-end border-[16px] border-[#dfddce] p-4 lg:p-10">
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
                className="w-[250px] lg:w-[360px] outline-none py-2 border-b-2 border-gray-300 focus:border-red-500 "
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email *"
                className="mt-3 w-[250px] lg:w-[360px] outline-none py-2 border-b-2 border-gray-300 focus:border-red-500 "
              />
              <textarea
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message *"
                rows="3"
                className="mt-3 w-[250px] lg:w-[360px] outline-none py-2 border-b-2 border-gray-300 focus:border-red-500 resize-none"
              ></textarea>

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
