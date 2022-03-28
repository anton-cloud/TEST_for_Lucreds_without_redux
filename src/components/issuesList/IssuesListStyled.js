import styled from "styled-components";

export const IssuesListStyled = styled.section`
  /* margin-left: ${(props) => (props.isOpenSideBar ? `64px` : `none`)}; */
  padding-left: 0;
  position: relative;

  .box {
    height: 50px;
    z-index: 1;
    background-color: #5284ff;
    position: absolute;
    border-radius: 5px;
    top:40px;
    left: 20px;
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

.list {
    font-family: Avenir, Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 16px;
    display: flex;
    flex-direction: column;
    margin: 20px;
    padding: 20px 0;
    border-radius: 5px;
    background-color: #fff;
    z-index: 2;
    position: relative;

    margin-top: 60px;

    /* margin: 10px 0 10px 0; */
}
  
  .titleWrapper {
    display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.titleWrapper {
  display: flex;
  margin: 10px 20px;
}

.columnTitle {
  margin-left: 20px;
  margin-bottom: 20px;
}
/* .columnTitle:nth-child(1) {
  width: 15%;
}

.columnTitle:nth-child(2) {
  width: 15%;
}
.columnTitle:nth-child(3) {
  width: 25%;
} */



`;
