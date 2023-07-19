
const Table = ({ sat }) => {

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
          { sat.map((data, id) => {
            return
            <tr key={id}> 
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.launchDate}</td>
              <td>{data.operational ? "Active" : "Inactive"}</td>

              {/* data.operational === true ? ( <td>Active</td> : 
               <td>Inactive</td> )
; */}

            </tr>
            })
          }        
        </tbody>
      </table>
  );
};

export default Table;

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