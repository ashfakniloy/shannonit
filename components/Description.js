import Image from "next/image";

function Description() {
  return (
    <div className="bg-custom-gray4">
      <div className="container py-12 lg:py-[190px] px-4">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 pb-20 border-b border-gray-200">
          <div className="flex flex-col justify-between">
            <h1 className="heading-lg leading-snug lg:text-[32px]">
              Beautiful, Innovative & Effective Websites With Box Theme
            </h1>
            <p className="mt-6 lg:mt-10 text-custom-gray3">
              There are vivid, unique and, sometimes, even revolutionary ideas
              on a basis of our work. It is a very foundation of each and every
              project, no matter it’s digital, marketing activity or a PR
              campaign — we always score our goals.
            </p>
          </div>
          <div className="flex items-end">
            <p className="text-custom-gray3">
              Our raison d’etre is to master the best image solutions in the
              industry, and we solve all our tasks. There are a lot of major
              brands among our clients, and each of them is satisfied with our
              partnership.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:grid grid-cols-4 lg:gap-6 mt-20">
          <div className="">
            <Image
              src="/images/description/management.png"
              alt=""
              width={59}
              height={64}
            />
            <h2 className="mt-5 heading-md">management</h2>
            <p className="mt-6 text-sm leading-relaxed text-custom-gray3">
              We always find the most effective ways, find a proper approach to
              every client and employee, what guarantees a really good result.
            </p>
          </div>
          <div className="">
            <Image
              src="/images/description/design.png"
              alt=""
              width={64}
              height={64}
            />
            <h2 className="mt-5 heading-md">design</h2>
            <p className="mt-6 text-sm leading-relaxed text-custom-gray3">
              Bright ideas should be implemented in the appropriate way. We’re
              proud of our design team that brought so many vivid brands to
              life.
            </p>
          </div>
          <div className="">
            <Image
              src="/images/description/planning.png"
              alt=""
              width={64}
              height={64}
            />
            <h2 className="mt-5 heading-md">planning</h2>
            <p className="mt-6 text-sm leading-relaxed text-custom-gray3">
              We see our mission not only in building our brand from the scratch
              but in developing the strategy of its growth and evolution.
            </p>
          </div>
          <div className="">
            <Image
              src="/images/description/analytics.png"
              alt=""
              width={52}
              height={64}
            />
            <h2 className="mt-5 heading-md">analytics</h2>
            <p className="mt-6 text-sm leading-relaxed text-custom-gray3">
              We provide a comprehensive data on your project status, and our
              analytics team is always ready to provide you regular reports.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
