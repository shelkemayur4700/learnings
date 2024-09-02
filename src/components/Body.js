// import { resData } from "../utills/constants";
// import HotelCard from "./HotelCard";

// const Body = () => {
//   return (
//     <div className="body-container">
//       {resData.map((restaurant) => (
//         <HotelCard key={restaurant.info.id} resData={restaurant.info} />
//       ))}
//     </div>
//   );
// };
// export default Body;

import { useState } from "react";
import { resData } from "../utills/constants";
import HotelCard from "./HotelCard";
// What is state
// what is React Hooks? - functions,
// What is useState
function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.info.name.includes(searchText)
  );
  return filterData;
}
const Body = () => {
  const [restaurants, setRestaurants] = useState(resData);
  const [searchText, setSearchText] = useState("");
  return (
    <>
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
            const data = filterData(searchText, restaurants);
            // update the state - restaurants
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="body-container">
        {restaurants.map((restaurant) => (
          <HotelCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </>
  );
};
export default Body;
