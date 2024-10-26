import React, { useState } from "react";
import fetchingYoutubeApi from "../Api";
import YOUTUBELOGO from "../Images/youtube_logo.webp";
import "./SearchBar.css";
import { RxIconName } from 'react-icons/rx';
import { RxCross2 } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");
//   const [items, setItems] = useState([]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = await fetchingYoutubeApi(inputValue);
    // setItems(data);
    // console.log(items);
    onSearch(data);
  };

  const handleResetClick = () => {
    setInputValue("");
  };

  const handleSearchClick = () => {
    console.log("Search clicked");
  };

  const handleClickReload = () => {
    window.location.reload();
  };

  return (
    <div className="search_bar_container">
      <div className="img_container">
        <div className="youtube_img_container">
          <img
            src={YOUTUBELOGO}
            alt="youtube logo"
            onClick={handleClickReload}
          />
        </div>
      </div>
      <div className="search_form">
        <form onSubmit={handleSubmit}>
          {/* <label>Search Here</label> */}
          <div className="input_container">
            <input type="text" value={inputValue} onChange={handleChange} />
            <button
              type="reset"
              className="btn_reset"
              onClick={handleResetClick}
            >
              <RxCross2 />
            </button>
            <button
              type="submit"
              className="btn_submit"
              onClick={handleSearchClick}
            >
              <FaSearch />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
