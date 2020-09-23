import React from "react";

function EmployeeList(props) {
  return props.results.map((result) => (
    <tr key={result.id.value}>
      <td>{result.name.first}</td>
      <td>{result.name.last}</td>
      <td>{result.email}</td>
      <td>{result.dob.age}</td>
      <img alt="person" src={result.picture.thumbnail} className="img-fluid" />
    </tr>
  ));
}

export default EmployeeList;
