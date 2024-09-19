import { IMAGE_LINK } from "../constants";

const HotelCard = ({ resData }) => {
  const { name, avgRating, cloudinaryImageId, locality, cuisines } = resData;

  return (
    <div className="m-4 p-4 w-[300px] bg-gray-100 rounded-xl shadow-lg ">
      <img
        className="rounded-2xl"
        src={IMAGE_LINK + cloudinaryImageId}
        alt="vada-paav"
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{avgRating} stars</h4>
      <h4 className="flex flex-wrap">{cuisines?.join(",")}</h4>
      <h4>Deliver in 30 min</h4>
    </div>
  );
};

export default HotelCard;
