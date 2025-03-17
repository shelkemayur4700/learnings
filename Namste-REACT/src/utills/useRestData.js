import { useEffect, useState } from "react";

const useRestData = () => {
  const [rrestaurants, setRestaurants] = useState([]);

  async function fetchRestourants() {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0035047&lng=72.84183879999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await res.json();
    // console.log(
    //   "--------->>>",
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );
    setRestaurants(
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  useEffect(() => {
    fetchRestourants();
  }, []);

  return rrestaurants;
};

export default useRestData;
