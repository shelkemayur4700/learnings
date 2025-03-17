import { useDispatch } from "react-redux";
import { IMAGE_LINK } from "../constants";
import { addItem } from "../Redux/cartSlice";
import React from "react";
const ItemList = ({ items }) => {
  // console.log(items);
  const dispatch = useDispatch();

  const HandleaddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items?.map((item) => (
        <div
          data-testid="foodItems"
          key={item?.card?.info?.id}
          className="p-2 m-2 border-b-2 text-left flex justify-between"
        >
          {/* TEXT DATA  */}
          <div className="w-10/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span className=" ">
                - ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <div>
              <p className="text-xs">{item?.card?.info?.description}</p>
            </div>
          </div>
          {/* IMAGE DATA  */}
          <div className="w-2/12 p-4 justify-center flex">
            <img
              src={IMAGE_LINK + item?.card?.info?.imageId}
              className="w-20 rounded-lg "
              alt=""
            />
            <button
              className="p-2 bg-white shadow-lg absolute m-auto mt-[55px] rounded-lg"
              onClick={() => HandleaddItem(item)}
            >
              Add+
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
