import React, { useState } from "react";
import { HeaderStyled } from "./HeaderStyled";
import spriteHeader from "../../icons/header/symbol-defs.svg";
import SideBar from "../sideBar/SideBar";
import HeaderBottom from "./header_bottom/HeaderBottom";

const Header = ({
  isOpenSideBar,
  onHandleClick,
  onHandleDarkMode,
  toggleDarkModeValue,
}) => {
  const [selectValue, setSelectValue] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [isHiddenSearch, setHiddenSearch] = useState(false);

  console.log(isHiddenSearch);
  const onChangeSelect = (e) => setSelectValue(e.target.value);

  const onHandleChangeSearchValue = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    alert(searchValue);
    setSearchValue("");
  };

  return (
    <>
      <HeaderStyled>
        <SideBar isOpenSideBar={isOpenSideBar} onHandleClick={onHandleClick} />
        <div className="headerWrapper">
          <div className="leftContainer">
            <a href="/" className="headerLogo">
              logo logo
            </a>
            <select className="headerSelect" onChange={onChangeSelect}>
              <option value="false">NO PROFILE</option>
              <option value="true">PROFILE</option>
            </select>
          </div>

          <ul className="headerList">
            <li className="headerItem">
              {isHiddenSearch && (
                <div className="searchWrapper">
                  <form onSubmit={onHandleSubmit}>
                    <label>
                      <input
                        className="search"
                        onChange={onHandleChangeSearchValue}
                        value={searchValue}
                        type="search"
                        name="search"
                        placeholder="Search"
                      ></input>
                    </label>
                  </form>
                </div>
              )}
              <svg
                className="headerIcon"
                onClick={() => setHiddenSearch(!isHiddenSearch)}
              >
                <use href={spriteHeader + "#icon-search"} />
              </svg>
            </li>
            <li className="headerItem">
              <svg className="headerIcon">
                <use href={spriteHeader + "#icon-notification"} />
              </svg>
            </li>
            <li className="headerItem">
              <svg className="headerIcon">
                <use href={spriteHeader + "#icon-profile"} />
              </svg>
            </li>
          </ul>
        </div>
      </HeaderStyled>
      {selectValue === "true" && (
        <HeaderBottom
          isOpenSideBar={isOpenSideBar}
          toggleDarkModeValue={toggleDarkModeValue}
          onHandleDarkMode={onHandleDarkMode}
        />
      )}
    </>
  );
};

export default Header;
