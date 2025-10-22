import React, { useState } from "react";
import Rescards from "./Rescards";
import ResList from "../utils/ResList";
import { useState } from "react";

export const Body = () => {
  const [LOR,setLOR] = useState(ResList);

  return (
    <div className="body">
      <div className="widgets">
        <button className="filterTop" onClick={()=> {
        const Filter4 = LOR.filter(i => i.info.avgRating > 4);
        setLOR(Filter4)
        }
         }
        >
          Filter Top
        </button>

      </div>
      <div className="res-container">

        {LOR.map((i) => {
          return <Rescards key={i.info.id} info={i.info} />;
        })}
      </div>
    </div>
  );
};

export default Body;
