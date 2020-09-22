import React from "react";

function EmployeeList(props) {
  return (
    <tr>
      {props.results.map((result) => (
        <tr key={result.index}>
          <td>{result.index}</td>
          <td>{result.name.first}</td>
          <td>{result.name.last}</td>
          <td>{result.email}</td>
          <td>{result.dob.age}</td>
          <img
            alt="person"
            src={result.picture.thumbnail}
            className="img-fluid"
          />
        </tr>
      ))}
    </tr>
  );
}

export default EmployeeList;
