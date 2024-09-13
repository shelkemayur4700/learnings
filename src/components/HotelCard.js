import { IMAGE_LINK } from "../constants";

const HotelCard = ({ resData }) => {
  const { name, avgRating, cloudinaryImageId, locality, cuisines } = resData;

  return (
    <div className="hotel-card">
      <img
        className="hotel-img"
        src={IMAGE_LINK + cloudinaryImageId}
        alt="vada-paav"
      />
      <h3>{name}</h3>
      <h4>{avgRating} stars</h4>
      <h4 className="cuisines_txt">{cuisines?.join(",")}</h4>
      <h4>Deliver in 30 min</h4>
    </div>
  );
};

export default HotelCard;
