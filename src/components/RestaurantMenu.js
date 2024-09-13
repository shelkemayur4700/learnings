import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_LINK } from "../constants";
import Shimmer from "./Shimmer";
import useResMenu from "../utills/useRestMenu";
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
  const restaurant = useResMenu(resId);
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restraunt id: {resId}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMAGE_LINK + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
        <h3>{restaurant?.sla?.slaString}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {/* {Object?.values(restaurant?.menu?.items).map((item) => (
            <li key={item?.id}>{item?.name}</li>
          ))} */}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
