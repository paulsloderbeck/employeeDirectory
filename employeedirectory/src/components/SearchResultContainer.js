import React, { Component } from "react";
import API from "../utils/API";
import EmployeeList from "./EmployeeList";

class SearchResultContainer extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    this.searchAPI();
  }

  searchAPI = () => {
    API.search()
      .then((res) => this.setState({ results: res.data.results }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
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
            <EmployeeList results={this.state.results} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default SearchResultContainer;
