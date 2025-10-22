import { CLOUD_CDN_URL } from "../utils/common";

const Rescards = (props) => {
    const {name, avgRating, cuisines, sla, cloudinaryImageId, costForTwo, areaName} = props.info;
  return (
    <div className="res-cards">
      <img
        src={
           CLOUD_CDN_URL + cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <p>Rating: {avgRating}</p>
      <p>cuisines: {cuisines.join(",")}</p>
      <h4>ETA - {sla.deliveryTime} mins</h4>
      <p>Cost for two: {costForTwo}</p>
      <p>Area: {areaName}</p>
    </div>
  );
};

export default Rescards;