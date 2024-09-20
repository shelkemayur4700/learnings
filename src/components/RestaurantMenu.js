import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_LINK } from "../constants";
import Shimmer from "./Shimmer";
import useResMenu from "../utills/useRestMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  // how to read a dynamic URL params
  const { resId } = useParams();
  // Use proper names
  // const [restaurant, setRestauraunt] = useState(null);
  // useEffect(() => {
  //   getRestaurantInfo();
  // }, []);
  // async function getRestaurantInfo() {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=" +
  //       resId
  //   );
  //   const json = await data.json();
  //   console.log(json.data);
  //   setRestauraunt(json.data?.cards[2]?.card?.card?.info);
  // }

  const [showItems, setShowItems] = useState(false);
  const [showIndex, setShowIndex] = useState(null);
  const restaurant = useResMenu(resId);

  const {
    name,
    cloudinaryImageId,
    area,
    city,
    avgRating,
    costForTwoMessage,
    sla,
    cuisines,
  } = (restaurant && restaurant?.cards[2]?.card?.card?.info) || {};
  const itemCards =
    restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || {};
  console.log(
    "itemCards",
    // restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    itemCards
  );
  const categories =
    restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];
  console.log("categories", categories);
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <div>
        {/* <h1>Restraunt id: {resId}</h1> */}
        <h2 className="font-bold my-6 text-2xl">{name}</h2>
        <p className="font-bold text-lg">
          {cuisines.join(",")} - {costForTwoMessage}
        </p>
        {/* Accordisns for category  */}
        {categories?.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index == showIndex ? null : index)} //to close all accordians.
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
