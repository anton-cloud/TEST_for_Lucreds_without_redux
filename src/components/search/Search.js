import React from "react";
import { SearchStyled } from "./SearchStyled";

const Search = () => {
  return (
    <SearchStyled id="wrap">
      <form action="" autocomplete="on">
        <input
          id="search"
          name="search"
          type="text"
          placeholder="What're we looking for ?"
        />
        <input id="search_submit" value="Rechercher" type="submit"></input>
      </form>
    </SearchStyled>
  );
};

export default Search;
