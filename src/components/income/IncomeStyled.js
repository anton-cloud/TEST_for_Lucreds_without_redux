import styled from "styled-components";

export const IncomeStyled = styled.div`
  position: relative;
  width: 80%;
  margin-top: 20px;
  margin-bottom: 20px;

  .box:nth-child(1) {
    /* top: 20px;
    left: 130px;
    background-color: #1789fc;
    position: absolute;
    z-index: 3; */
    height: 50px;
    z-index: 1;
    background-color: #5284ff;
    position: absolute;
    border-radius: 5px;
    top: -20px;
  }

  .box:nth-child(2) {
    background-color: #ffffff;
    border-radius: 5px;
    position: relative;
    z-index: 2;
    padding: 20px;
  }

  .title {
    padding: 2px 20px;
    text-transform: uppercase;
    font-family: Avenir;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0em;

    color: #ffffff;
  }

  .subTitle {
    font-family: Avenir;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 22px;
    letter-spacing: 0em;

    color: #707070;
  }

  .value {
    font-family: Abel;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 38px;
    letter-spacing: 0em;

    margin-top: 10px;
    text-align: center;
  }

  .line {
    border: 1px solid #e8e8e8;
  }

  .note {
    font-family: Avenir;
    font-size: 10px;
    font-style: normal;
    font-weight: 300;
    line-height: 14px;
    letter-spacing: 0em;

    margin-top: 5px;
    color: #707070;
  }
`;
