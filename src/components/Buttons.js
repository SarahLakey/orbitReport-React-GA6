import satData from "./satData";


    //!  Part 4.2: Pass the props created from the App() function: filterByType, setSat, and displaySats.


const Buttons = (props) => {
  const filterByType = props.filterByType;
  const setSat = props.setSat;
  const displaySats = props.displaySats;

    return (
    <div>
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

       //! Part 4.4 Inside the <button> tag, create an onClick function that points to setSat. Pass satData to setSat.