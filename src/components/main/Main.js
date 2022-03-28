import React from "react";
import Income from "../income/Income";
import IssuesList from "../issuesList/IssuesList";
import { MainStyled } from "./MainStyled";

const monthArr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Main = ({ isOpenSideBar, toggleDarkModeValue }) => {
  const month = new Date().getMonth();

  return (
    <MainStyled
      isOpenSideBar={isOpenSideBar}
      toggleDarkModeValue={toggleDarkModeValue}
    >
      <IssuesList />
      <div className="rigthWrapper">
        <Income
          title="Lorem Disrup"
          month={monthArr[month - 1]}
          subTitle="Probability of potential clients:"
          value_1="12 957.90 €"
          colorValue_1="#232323"
          colorValue_2="#0071FB"
          value_2="84%"
        />

        <Income
          title="Lorem Disrup"
          month={monthArr[month - 1]}
          subTitle="Estimated earnings from 
          clients:"
          value_1="4 329.80 €"
          colorValue_1="#37B96B"
          colorValue_2="#37B96B"
          value_2="8 556.50 €"
        />
      </div>
    </MainStyled>
  );
};

export default Main;
