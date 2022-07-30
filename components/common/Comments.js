import Image from "next/image";
import Slider from "react-slick";
import { commentList } from "../../data/commentList";

function Comments() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="bg-[#f8f8f8]">
      <div className="lg:container py-16 px-4 lg:py-44">
        <div className="lg:mx-28">
          <div className="flex flex-col items-center">
            <Image src="/images/message.png" alt="" width={55} height={40} />
          </div>
          <div className="mt-5 lg:mt-10">
            <div className="">
              <Slider {...settings}>
                {commentList.map((comment) => (
                  <div key={comment.id} className="p-6 text-center">
                    <Image
                      src={comment.img}
                      alt=""
                      className="lg:pb-5"
                      width={50}
                      height={50}
                    />
                    <h2 className="py-6 heading-lg lg:text-[26px] text-center">
                      {comment.desc}
                    </h2>
                    <p className="text-lg lg:text-xl text-green-400">
                      {comment.name}
                    </p>
                    <p className="text-xs lg:text-sm text-custom-gray3">
                      {comment.position}
                    </p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
