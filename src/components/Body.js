import Restaurant from "./Restaurant";
import { useEffect, useState } from "react";
import ShimmerUI from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();

    setListOfRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setFilteredList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body-container">
      <div className="filter">
        <div className="search">
          <input
            className="serach-box"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredData = listOfRestaurants.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );

              setFilteredList(filteredData);
            }}
          >
            serach
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterdList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );
            setFilteredList(filterdList);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      {filteredList.length === 0 ? (
        <h1>No restaurant match your search </h1>
      ) : (
        <div className="restaurant-conatiner">
          {filteredList?.map((restaurant, index) => {
            return <Restaurant resData={restaurant} key={index} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
