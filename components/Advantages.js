import Image from "next/image";
function Advantages() {
  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="lg:grid grid-cols-2 px-4 gap-28">
        <Image src="/images/macbook.png" width={911} height={554} />

        <div className="pt-2 lg:mr-36 lg:pr-60 self-center">
          <h2 className="heading-lg">Discover the advantages</h2>
          <p className="mt-7 text-custom-gray3">
            Thanks to our experience and the centrality of the attention to the
            wishes of our customers, we create Web projects at the highest
            professional level
          </p>
          <div className="flex flex-col gap-2 lg:gap-4 mt-14">
            <div className="flex items-center gap-5 lg:gap-10">
              <Image src="/images/pen.png" alt="" width={30} height={30} />
              <p className="text-custom-orange">Web Design</p>
            </div>
            <div className="flex items-center gap-5 lg:gap-10">
              <Image src="/images/plug.png" alt="" width={30} height={30} />
              <p className="text-custom-orange">Web Development</p>
            </div>
            <div className="flex items-center gap-5 lg:gap-10">
              <Image src="/images/setting.png" alt="" width={30} height={30} />
              <p className="text-custom-orange">UX Design</p>
            </div>
            <div className="flex items-center gap-5 lg:gap-10">
              <Image src="/images/search.png" alt="" width={30} height={30} />
              <p className="text-custom-orange">Seo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
