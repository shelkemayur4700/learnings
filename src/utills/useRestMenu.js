import { useEffect, useState } from "react";

const useResMenu = (resId) => {
  const [restaurant, setRestauraunt] = useState(null);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0035047&lng=72.84183879999999&restaurantId=" +
        resId
    );
    const jsonData = await data?.json();
    console.log("menus", jsonData.data);
    setRestauraunt(jsonData.data);
  }

  useEffect(() => {
    getRestaurantInfo();
  }, []);
  return restaurant;
};

export default useResMenu;
