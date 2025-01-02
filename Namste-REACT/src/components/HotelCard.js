import React from "react";
import { IMAGE_LINK } from "../constants";
const HotelCard = ({ resData }) => {
  const { name, avgRating, cloudinaryImageId, locality, cuisines } = resData;

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[300px] bg-gray-100 rounded-xl shadow-lg "
    >
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

// Higher order component
export const withOpenLabel = (HotelCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-6 p-2 rounded-lg ">
          Open
        </label>
        <HotelCard {...props} />
      </div>
    );
  };
};
export default HotelCard;
