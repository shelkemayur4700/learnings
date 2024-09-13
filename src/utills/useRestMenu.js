import { useEffect, useState } from "react";

const useResMenu = (resId) => {
  console.log("calling.....customHook");
  const [restaurant, setRestauraunt] = useState(null);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=" +
        resId
    );
    const json = await data.json();
    console.log(json.data);
    setRestauraunt(json.data?.cards[2]?.card?.card?.info);
  }

  useEffect(() => {
    getRestaurantInfo();
  }, []);
  return restaurant;
};

export default useResMenu;
