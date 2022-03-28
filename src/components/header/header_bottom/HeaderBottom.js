import React, { useState } from "react";
import { HeaderBottomStyled } from "./HeaderBottomStyled";
import sprite from "../../../icons/header_bottom/symbol-defs.svg";
import Switch from "../../switch/Switch";

const HeaderBottom = ({
  isOpenSideBar,
  toggleDarkModeValue,
  onHandleDarkMode,
}) => {
  const [toggleViewModeValue, setToggleViewModeValue] = useState(true);
  console.log(`toggleViewModeValue:  ${toggleViewModeValue}`);
  const onHandleViewMode = () => {
    setToggleViewModeValue(!toggleViewModeValue);
    toggleViewModeValue ? alert("online") : alert("offline");
  };

  return (
    <HeaderBottomStyled isOpenSideBar={isOpenSideBar}>
      <ul className="list">
        <li className="item">
          <div className="leftWrapper">
            <svg className="icon">
              <use href={sprite + "#icon-picture_1"} />
            </svg>
            <p className="description">Lorem Disrupp</p>
          </div>
          <p className="value">49% С</p>
        </li>
        <li className="item">
          <div className="leftWrapper">
            <svg className="icon">
              <use href={sprite + "#icon-picture_2"} />
            </svg>
            <p className="description">Lorem Disrupp</p>
          </div>
          <p className="value">
            13/
            <span className="value_accent">100</span>
          </p>
        </li>
        <li className="item">
          <div className="leftWrapper">
            <svg className="icon">
              <use href={sprite + "#icon-picture_3"} />
            </svg>
            <p className="description">Lorem Disrupp</p>
          </div>
          <p className="value">0</p>
        </li>
        <li className="item">
          <div className="leftWrapper">
            <svg className="icon">
              <use href={sprite + "#icon-picture_4"} />
            </svg>
            <p className="description">Lorem Disrupp</p>
          </div>
          <p className="value">34 820.55€</p>
        </li>
      </ul>
      <div className="switchWrapper">
        <Switch
          isOn={toggleDarkModeValue}
          onColor="#EF476F"
          pointColor="#232323"
          handleToggle={onHandleDarkMode}
          text="dark mode"
        />

        <Switch
          isOn={toggleViewModeValue}
          onColor="#EF476F"
          pointColor="#2E6AFF"
          handleToggle={onHandleViewMode}
          text="view mode"
        />
      </div>
    </HeaderBottomStyled>
  );
};

export default HeaderBottom;
