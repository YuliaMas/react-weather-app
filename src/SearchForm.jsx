import React from "react";

export default function SearchForm(props) {
  return (
    <form id="search-form" onSubmit={props.handleSubmit}>
      <input
        type="search"
        onChange={props.changeCity}
        placeholder="Enter a city.."
        className="search-input"
        id="search-input"
      />
      <input type="submit" value="Search" className="search-button" />
    </form>
  );
}
