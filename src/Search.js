import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      isSearching: false,
    };

    this.search = this.search.bind(this);
  }

  search(event) {
    this.props.filter(event.target.value);
  }

  render() {
    return (
      <div>
        <h4>Monsters</h4>
        <div>
          <input
            type="text"
            className="input"
            placeholder="Search..."
            value={this.props.search}
            onChange={this.search}
          />
        </div>
      </div>
    );
  }
}

export default Search;
