import React, { Component } from "react";
import API from "../utils/API";
import EmployeeList from "./EmployeeList";

class SearchResultContainer extends Component {
  state = {
    results: [],
    filteredResults: []
  };

  componentDidMount() {
    this.searchAPI();
  }

  searchAPI = () => {
    API.search()
      .then((res) =>
        this.setState({
          results: res.data.results,
          filteredResults: res.data.results
        })
      )
      .catch((err) => console.log(err));
  };

  sortByName = () => {
    const filteredByName = [...this.state.results].sort((a, b) =>
      a.name.last > b.name.last ? 1 : -1
    );
    console.log(filteredByName);
    this.setState({ filteredResults: filteredByName });
  };

  sortByAgeDesc = () => {
    const filteredByAgeDesc = [...this.state.results].sort(
      (a, b) => b.dob.age - a.dob.age
    );
    console.log(filteredByAgeDesc);
    this.setState({ filteredResults: filteredByAgeDesc });
  };

  sortByAgeAsc = () => {
    const filteredByAgeAsc = [...this.state.results].sort(
      (a, b) => a.dob.age - b.dob.age
    );
    console.log(filteredByAgeAsc);
    this.setState({ filteredResults: filteredByAgeAsc });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.sortByName}
          className="btn btn-primary ml-2 mr-2 mb-4"
        >
          Sort Alphabetically By Last Name
        </button>
        <button
          onClick={this.sortByAgeDesc}
          className="btn btn-primary ml-2 mr-2 mb-4"
        >
          Sort By Age Descending
        </button>
        <button
          onClick={this.sortByAgeAsc}
          className="btn btn-primary ml-2 mr-2 mb-4"
        >
          Sort By Age Ascending
        </button>
        <button
          onClick={() => this.setState({ filteredResults: this.state.results })}
          className="btn btn-primary ml-2 mr-2 mb-4"
        >
          Restore List
        </button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">email</th>
              <th scope="col">age</th>
              <th scope="col">photo</th>
            </tr>
          </thead>
          <tbody>
            <EmployeeList results={this.state.filteredResults} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default SearchResultContainer;
