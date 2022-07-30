import { useRouter } from "next/router";
import Link from "next/link";

function Banner({ heading, text }) {
  const { pathname } = useRouter();

  return (
    <div className="bg-[url('/images/banner.jpg')]">
      {pathname === "/" ? (
        <div className="lg:container px-4 grid grid-cols-3 text-white py-32 lg:py-[370px]">
          <div className="col-span-3 lg:col-span-2 pt-28 lg:pt-0">
            <p className="">There&apos;s a template for everything</p>
            <h1 className="font-Montserrat text-[25px] lg:text-[55px] leading-tight ">
              We create high quality digital solutions
            </h1>
            <p className="mt-7 text-custom-gray2">
              We combine creativity, technologies and passion to bring you the
              best results in web design. Join our community to start building
              your website now
            </p>
            <Link href="/more" passHref>
              <button className="mt-12 py-3 lg:py-4 px-6 lg:px-10 bg-white hover:bg-custom-orange duration-300 text-custom-gray text-xs lg:text-sm font-bold tracking-widest font-Montserrat rounded-full uppercase">
                read more
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="lg:container px-4 grid grid-cols-3 text-white py-32 lg:pt-[300px] lg:pb-[150px]">
          <div className="col-span-3 pt-28 lg:pt-0">
            <p className="">{text}</p>
            <h1 className="font-Montserrat text-[25px] lg:text-[55px] leading-tight ">
              {heading}
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default Banner;
