import './styling.css'
import satData from "./satData";
import React from "react";

const Buttons = (props) => {
  const filterByType = props.filterByType;
  const setSat = props.setSat;
  const displaySats = props.displaySats;

    return (
    <div className='flex-container'>
        {displaySats.map((sat, id) => {
          return (
            <button onClick={() => filterByType(sat)} key={id}>
              {sat} Orbit
            </button>
          );
        })}

      <button  onClick={() => setSat(setSat)}>
        All Orbits</button>
      </div>
  );
};

export default Buttons;
