const Rescards = (props) => {
    const {name, avgRating, cuisines, sla, cloudinaryImageId, costForTwo, areaName} = props.info;
  return (
    <div className="res-cards">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId
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