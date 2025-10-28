import { Rescards } from "./Rescards";
import { DataHardcoded } from "./DataHardcoded";
export const Body = () => {
  return (
    <div className="body">
      <div className="widgets">
        <div className="quickbuttons">
          <button id="top-rated">Top Rated Restaurant</button>
          <button id="under-30-min">Under 30 min</button>
          <button id="under-200">under ₹ 200</button>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search..." id="search-input" />
          <button id="search-button">Search</button>
        </div>
      </div>

      <div className="rescards-container">
        {DataHardcoded.map((i) => {
          return (
            <Rescards
              key={i.info.id}
              {...i.info}
            />
          );
        })}
      </div>
    </div>
  );
};