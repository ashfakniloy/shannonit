import Image from "next/image";

export default function ImageGrid({ image }) {
  return (
    <div className="flex justify-center">
      <div className="bg-slate-600 w-[290px] h-[210px] lg:w-[330px] lg:h-[250px] overflow-hidden">
        <Image
          src={image}
          alt=""
          className="hover:scale-110 hover:opacity-50 duration-500"
          width={330}
          height={250}
        />
      </div>
    </div>
  );
}
