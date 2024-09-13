import { useEffect, useState } from "react";
import HotelCard from "./HotelCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestData from "../utills/useRestData";

const Body = () => {
  const rrestaurants = useRestData();
  const [filterRes, setFilterRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  function topRated() {
    setFilterRes(filterRes?.filter((res) => res?.info?.avgRating > 4.2));
  }

  function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(searchText?.toLowerCase())
    );
    return filterData;
  }
  //Update filterState when data fetched from api
  useEffect(() => {
    setFilterRes(rrestaurants);
  }, [rrestaurants]);
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
