import React, { useState } from "react";
import IssuesItem from "../issuesItem/IssuesItem";

import { IssuesListStyled } from "./IssuesListStyled";

const IssuesList = () => {
  return (
    <IssuesListStyled>
      <div class="box">
        <p className="title">LIST OF DETECTED ISSUES</p>
      </div>
      <ul className="list">
        <IssuesItem
          titleCol_1="G1"
          titleCol_2="GG12"
          titleCol_3="Lorem12"
          titleCol_4="Lorem ipsum"
          titleCol_5="Lorem "
          text_1="Lorem Disrup"
          text_2="Lorem Disrup"
          text_3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
          text_4="Lorem ipsum:
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        V6ta siit mingid teksti read.
        "
          price="448.00 €"
          data="16:35 | 24.February 2021"
        />
        <hr align="center" width="95%" color="#E8E8E8" />
        <IssuesItem
          text_1="Lorem Disrup"
          text_2="Lorem Disrup"
          text_3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
          text_4="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        V6ta siit mingid teksti read.
        "
          text_5="Lorem ipsum:
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        V6ta siit mingid teksti read.
        "
          price="3 202.00 €"
          data="16:31 | 24.February 2021"
        />
        <hr align="center" width="95%" color="#E8E8E8" />
        <IssuesItem
          text_1="Lorem Disrup"
          text_2="Lorem Disrup"
          text_3="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
          text_4="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        V6ta siit mingid teksti read.
        "
          text_5="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        V6ta siit mingid teksti read.
        "
          price="1 427.50 €"
        />
      </ul>
    </IssuesListStyled>
  );
};

export default IssuesList;
