import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SearchBar = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 572px;
  height: 36px;
  border-radius: 10px;
  padding: 10px;
  background-color: #ddd;

  &:hover {
    background-color: #d3d3d3;
  }
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 14px;
  border: none;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  background-color: white;
  color: #666;
  height: 100%;
  background-color: transparent;
  outline: none;
  margin-right: 10px;
`;

const SearchButton = styled.button`
  background-color: #046cb8;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  font-size: 12px;
  color: #fff;
  margin: 5px;
  margin-left: auto;
  border-radius: 10px;
  cursor: pointer;
  border: none;
`;

const SearchIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
  color: #666;
`;

function SearchComponent({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    setSearchTerm(""); // Clear the search input after submission
  };

  return (
    <SearchBar onSubmit={handleSearchClick}>
      <SearchIcon icon={faSearch} />
      <SearchInput
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Nhập địa điểm du lịch mà bạn muốn khám phá..."
      />
      <SearchButton type="submit">Khám phá</SearchButton>
    </SearchBar>
  );
}

export default SearchComponent;
