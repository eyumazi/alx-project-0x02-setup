import type { CardProps} from "@/interfaces";
import Image from "next/image";

const Card: React.FC<CardProps> = ({ title, contents }) => {
  return (
    <div className="card-list">
      <h2 className="font-bold text-xl mb-4">{title}</h2>
      {contents.map((item, idx) => (
        <div key={idx} className="card-container flex flex-col p-6 w-[455px] bg-white rounded-3xl shadow-lg mb-6">
          <div className="absolute bg-[#30c8ff] text-white font-bold px-3 py-1 rounded-lg text-sm ml-4 mt-4 z-10">
            60% OFF
          </div>
          <div className="image-wrapper relative">
            <Image
              src={item.imageUrl}
              alt="Property Image"
              width={455}
              height={305}
              className="property-image rounded-3xl object-cover mb-5 w-full h-[305px]"
            />
          </div>
          <div className="reviews-container flex gap-2 mb-4">
            {item.reviews.map((review) => (
              <div
                key={review}
                className="flex bg-gray-50 px-3 py-1 rounded-full items-center"
              >
                <span className="review-tag text-xs font-medium font-[Quicksand] text-gray-700">
                  {review}
                </span>
              </div>
            ))}
          </div>
            <div className="flex justify-between items-center mb-2">
              <span className="location text-gray-600">{item.location}</span>
              <span className="price text-blue-600 font-bold">{item.price}</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="rating text-yellow-500 font-bold mr-2">★ {item.rating}</span>
            </div>
            <div className="flex gap-2">
              {item.iconsUrl.map((icon) => (
                <Image key={icon} src={icon} alt="icon" width={24} height={24} />
              ))}
            </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
