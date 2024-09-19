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
      <div className="flex m-4 p-4">
        <div>
          <input
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
            Top rated
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filterRes?.map((restaurant) => (
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
