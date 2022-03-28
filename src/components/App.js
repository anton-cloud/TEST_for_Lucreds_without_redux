import React, { useState } from "react";
import { AppStyled } from "./AppStyled";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";

const App = () => {
  const [isOpenSideBar, setOpenSideBar] = useState(false);

  const [toggleDarkModeValue, setToggleDarkModeValue] = useState(true);
  console.log(`toggleDarkModeValue:  ${toggleDarkModeValue}`);

  const onHandleClick = () => setOpenSideBar(!isOpenSideBar);
  const onHandleDarkMode = () => setToggleDarkModeValue(!toggleDarkModeValue);

  return (
    <AppStyled>
      <Header
        onHandleClick={onHandleClick}
        isOpenSideBar={isOpenSideBar}
        onHandleDarkMode={onHandleDarkMode}
        toggleDarkModeValue={toggleDarkModeValue}
      />
      <Main
        isOpenSideBar={isOpenSideBar}
        toggleDarkModeValue={toggleDarkModeValue}
        onHandleDarkMode={onHandleDarkMode}
      />
      <Footer isOpenSideBar={isOpenSideBar} />
    </AppStyled>
  );
};

export default App;
