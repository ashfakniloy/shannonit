import Image from "next/image";
import { clientList } from "../../data/clientList";

function Clients() {
  return (
    <div className="bg-white">
      <div className="lg:container py-12 lg:py-[190px] px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {clientList.map((client) => (
            <div key={client.id} className="flex gap-14 lg:gap-20 items-center">
              <div className="">
                <Image src={client.img} alt="" width={500} height={180} />
              </div>
              <div className="">
                <h2 className="heading-sm">{client.name}</h2>
                <p className="mt-5 text-custom-gray3">{client.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;
