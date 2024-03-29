import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Restaurant = (props) => {
  const { name, costForTwo, cloudinaryImageId, avgRating } =
    props?.resData?.info;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="m-4 p-4 w-[200px] bg-gray-100 rounded-md hover:shadow-lg cursor-pointer">
      <img className="w-[100%] h-[130px]" src={CDN_URL + cloudinaryImageId} />
      <div className="description">
        <h3 className="font-bold h-12">{name}</h3>
        <h4 className="cost-for-two">{costForTwo}</h4>
        <h4 className="avg-rating">{avgRating}</h4>
        <p>{loggedInUser}</p>
      </div>
    </div>
  );
};

export const withPromotedRes = (Restaurant) => {
  return (props) => {
    return (
      <div>
        <label className=" absolute bg-black text-white mx-2 px-2 rounded">
          Best Seller
        </label>
        <Restaurant {...props} />
      </div>
    );
  };
};

export default Restaurant;
