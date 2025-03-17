import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    // setShoeItems(!showItems);
    setShowIndex();
  };
  return (
    <div>
      {/* Header  */}
      <div
        className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer"
        onClick={handleClick}
      > 
        <div className=" flex justify-between">
          <span className="font-bold text-lg">
            {data?.title}({data?.itemCards?.length})
          </span>
          <span>{showItems ? "🔼" : "🔽"}</span>
        </div>
        {/* Accordian body  */}
        {showItems && <ItemList st items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
