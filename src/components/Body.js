import React from "react";
import { useContext, useEffect, useState } from "react";
import HotelCard, { withOpenLabel } from "./HotelCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestData from "../utills/useRestData";
import UserContext from "../utills/UserContext";

const Body = () => {
  const rrestaurants = useRestData();
  const [filterRes, setFilterRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { setUserName, loggedInUser } = useContext(UserContext);
  const HotelwithOpenLabel = withOpenLabel(HotelCard);

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
      <div className="flex m-4 p-4">
        <div>
          <input
            data-testid="searchInput"
            type="text"
            className="border border-solid border-black rounded-lg p-1"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg "
            onClick={() => {
              //need to filter the data
              const data = filterData(searchText, rrestaurants);
              // update the state - restaurants
              setFilterRes(data);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="px-4 py-2 bg-gray-200 m-4 rounded-lg"
            onClick={topRated}
          >
            Top Rated Restaurant
          </button>
          <label>UserName:</label>
          <input
            type="text"
            className="border border-solid border-black rounded-lg p-1"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="flex flex-wrap">
        {filterRes?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant?.info?.isOpen ? (
              <HotelwithOpenLabel resData={restaurant.info} />
            ) : (
              <HotelCard resData={restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
