import { useEffect, useState } from "react";
import HotelCard from "./HotelCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(searchText?.toLowerCase())
  );
  return filterData;
}
const Body = () => {
  const [rrestaurants, setRestaurants] = useState([]);
  const [filterRes, setFilterRes] = useState(rrestaurants);
  const [searchText, setSearchText] = useState("");

  async function FetchData() {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await res.json();

    // console.log(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );
    setRestaurants(
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterRes(
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  useEffect(() => {
    FetchData();
  }, []);
  function topRated() {
    setFilterRes(filterRes?.filter((res) => res?.info?.avgRating > 4.2));
  }

  return filterRes?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, rrestaurants);
            // update the state - restaurants
            setFilterRes(data);
          }}
        >
          Search
        </button>
        <button className="search-btn" onClick={topRated}>
          Top rated
        </button>
      </div>
      <div className="body-container">
        {filterRes.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <HotelCard resData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
