import { cardData } from "../../data";

const TutorsCard = () => {
  return (
    <div className="flex flex-wrap justify-center items-center bg-gray-100 p-4">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
        >
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-48 object-cover"
              src={card.imageSrc}
              alt="Tutor"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{card.tutorName}</div>
              <p className="text-gray-700 text-base">{card.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              {card.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TutorsCard;
