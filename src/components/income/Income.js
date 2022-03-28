import React from "react";
import { IncomeStyled } from "./IncomeStyled";

const Income = ({
  title,
  month,
  subTitle,
  value_1,
  colorValue_1,
  colorValue_2,
  value_2,
}) => {
  return (
    <IncomeStyled>
      <div class="box">
        <p className="title">{title}</p>
      </div>
      <div class="box">
        <p className="subTitle">{month}</p>
        <p className="value" style={{ color: colorValue_1 }}>
          {value_1}
        </p>
        <hr className="line" />
        <p className="subTitle">{subTitle}</p>
        <p className="value" style={{ color: colorValue_2 }}>
          {value_2}
        </p>
        <p className="note">*based by our calculated analysis</p>
      </div>
    </IncomeStyled>
  );
};

export default Income;
