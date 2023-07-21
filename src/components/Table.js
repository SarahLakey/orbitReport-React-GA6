import React from "react";
import satData from "./satData";
import './styling.css'


const Table = ({ sat }) => {
  // const data = [{sat}]
  return (
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
          { satData.map((data, id) =>
            <tr key={id}> 
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.launchDate}</td>
              <td>{data.operational ? "Active" : "Inactive"}</td>
            </tr>
            )
          }        
        </tbody>
      </table>
  );
};

export default Table;

//!Additional attempts for conditional statement

  {/* data.operational === true ? ( <td>Active</td> : 
               <td>Inactive</td> )
; */}

// function ifOperational({sat}) {
//   if (sat.operational === true){
//       return (
//       <td>Active</td>
//       );
//     } 
//       return (
//         <td>Inactive</td>
//       )
//     }