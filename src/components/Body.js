import Restaurant, { withPromotedRes } from "./Restaurant";
import { useEffect, useState, useContext } from "react";
import ShimmerUI from "./Shimmer";
import { RES_LIST } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantWithPromoted = withPromotedRes(Restaurant);

  onlineStatus = useOnline();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_LIST);

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

  if (!onlineStatus)
    return <h1>Your offline!! Please check you internet connection!!</h1>;

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body-container">
      <div className="flex mb-9 pl-20">
        <div className="mr-5">
          <input
            className="border border-solid border-black rounded mr-2 px-2 py-1"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-100 rounded"
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
        <div>
          <button
            className="px-4 py-1 bg-green-100 rounded"
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
        <div className="mx-4">
          <label>UserName:</label>
          <input
            className="border border-solid border-black rounded mr-2 px-2 py-1"
            type="text"
            placeholder="Search"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      {filteredList.length === 0 ? (
        <h1>No restaurant match your search </h1>
      ) : (
        <div className="flex flex-wrap justify-center">
          {filteredList?.map((restaurant, index) => {
            return (
              <Link
                className="restro-link"
                to={"/restaurant/" + restaurant.info.id}
              >
                {restaurant.info.avgRating > 4.5 ? (
                  <RestaurantWithPromoted resData={restaurant} key={index} />
                ) : (
                  <Restaurant resData={restaurant} key={index} />
                )}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
