import React from "react";
import styled from "styled-components";

const Search = styled.div`
  width: 100%;
  max-width: 572px;
  height: 36px;
  border-radius: 10px;
  padding 10px;
  background-color: #dddd;
  display:flex;
  align-items: center;

  i {
    color: #666;
    margin: 10px;
  }

  p {
    color: #666;
    margin: 10px;
  }

  div {
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
  }
  
  &:hover {
  background-color: #d3d3d3}
`;

const SearchTrip = () => {
  return (
    <Search>
      <i class="fa-solid fa-magnifying-glass"></i>
      <p>Tìm theo điểm đến, hoạt động</p>
      <div>Khám phá</div>
    </Search>
  );
};

export default SearchTrip;
