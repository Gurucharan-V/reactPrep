import { DataHardcoded } from "./DataHardcoded";    

export const Rescards = ({ cloudinaryImageId, name, avgRating, sla, costForTwo }) => {
  return (
    <div className="rescard">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="res-logo"
      />
      <h3>{name}</h3>
      <p>Rating: {avgRating}</p>
      <p>{sla.deliveryTime} mins</p>
      <p>{costForTwo}</p>
    </div>
  );
};