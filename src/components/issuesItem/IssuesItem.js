import React, { useState } from "react";
import sprite from "../../icons/issuesList/symbol-defs.svg";
import { IssuesItemStyled } from "./IssuesItemStyled";

const IssuesItem = ({
  titleCol_1,
  titleCol_2,
  titleCol_3,
  titleCol_4,
  titleCol_5,
  text_1,
  text_2,
  text_3,
  text_4,
  text_5,
  price,
  data,
}) => {
  const [isOpenDetails, setOpenDetails] = useState(false);

  return (
    <IssuesItemStyled isOpenDetails={isOpenDetails}>
      <div className="itemWrapper">
        <div className="column">
          {titleCol_1 && (
            <p className="columnTitle">
              {" "}
              <b> {titleCol_1}</b>
            </p>
          )}
          <p className="text">{text_1}</p>
        </div>
        <div className="column">
          {titleCol_2 && (
            <p className="columnTitle">
              <b>{titleCol_2}</b>{" "}
            </p>
          )}
          <p className="text">{text_2}</p>
        </div>
        <div className="column">
          {titleCol_3 && (
            <p className="columnTitle">
              <b>{titleCol_3}</b>
            </p>
          )}
          <p className="text">{text_3}</p>
        </div>

        <div className="textContainer">
          {titleCol_4 && (
            <p className="columnTitle" style={{ marginLeft: "0" }}>
              <b>{titleCol_4}</b>
            </p>
          )}
          <p className="text textWrapper">
            {isOpenDetails && <b>Lorem ipsum:</b>}
            {isOpenDetails && <br />}
            {text_4}
            {isOpenDetails && (
              <svg className="iconCopy">
                <use href={sprite + "#copy"} />
              </svg>
            )}
          </p>
          {text_5 && (
            <p className="text textWrapper second">
              {isOpenDetails && <b>Lorem ipsum:</b>}
              {isOpenDetails && <br />}
              {text_5}
              {isOpenDetails && (
                <svg className="iconCopy">
                  <use href={sprite + "#copy"} />
                </svg>
              )}
            </p>
          )}
        </div>

        <div className="priceWrapper">
          {titleCol_5 && (
            <p className="columnTitle" style={{ marginLeft: "0" }}>
              <b>{titleCol_5}</b>
            </p>
          )}
          <p className="text price">{price}</p>
          {isOpenDetails && (
            <div className="buttonWrapper">
              <button className="button">Lorem ips</button>
              <button className="button">Lorem ipsum</button>
              <button className="button">Lorem ipsum</button>
            </div>
          )}
        </div>

        {isOpenDetails ? (
          <svg className="icon" onClick={() => setOpenDetails(!isOpenDetails)}>
            <use href={sprite + "#arrow-down"} />
          </svg>
        ) : (
          <svg className="icon" onClick={() => setOpenDetails(!isOpenDetails)}>
            <use href={sprite + "#arrow-up"} />
          </svg>
        )}
      </div>
      <p className="data">{data}</p>
    </IssuesItemStyled>
  );
};

export default IssuesItem;
