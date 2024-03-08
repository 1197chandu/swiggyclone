import { CDN_URL } from "../utils/constants";

const Restaurant = (props) => {
  const { name, costForTwoString, cloudinaryImageId, avgRating } =
    props?.resData?.info;
  return (
    <div className="res-cards">
      <img className="card-img" src={CDN_URL + cloudinaryImageId} />
      <div className="description">
        <h3 className="res-name">{name}</h3>
        <h4 className="cost-for-two">{costForTwoString}</h4>
        <h4 className="avg-rating">{avgRating}</h4>
      </div>
    </div>
  );
};

export default Restaurant;
