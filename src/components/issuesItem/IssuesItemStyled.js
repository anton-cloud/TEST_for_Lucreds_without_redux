import styled from "styled-components";

export const IssuesItemStyled = styled.li`
  /* margin-left: ${(props) => (props.isOpenSideBar ? `64px` : `none`)}; */

    display: flex;
    flex-direction: column;
    justify-content: space-between;
/* 
    max-width: 25%; */


.itemWrapper{
    display: flex;
    list-style: none;
}

.text {
    padding-left: 20px;
    margin: 0;
}

.textWrapper {
    border: 1px solid #2E6AFF;
    border-radius: 5px;
    /* max-height: 58px; */
    max-height: ${(props) => (props.isOpenDetails ? `none` : `30px`)};
    overflow: hidden;
    padding: 0;
    padding-bottom: 25px;
    overflow: ${(props) => (props.isOpenDetails ? `hidden` : `none`)};
    position: relative;
}

.icon {
    /* height: 100px;
    width: 100px; */
    align-items: center;
    cursor: pointer;
    padding-top: 12px;
    width: 80px;
    height: 20px;
    margin-left: 20px;
}


.button {
    min-width: 142px;
    min-height: 33px;
    border: 2px solid #9BB8FF;
    border-radius: 20px;
    cursor: pointer;
}

.button:not(:first-child) {
    margin-top: 6px;
  }

  .buttonWrapper {
      padding-left: 20px;
  }

  .data {
      padding-left: 20px;

    font-family: Lato, Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 14px;
    margin:0 ;
    
    color: #AFAFAF;
  }

  .price {
    white-space: nowrap ;
  }

  .icon {
      padding: 0;
      margin-top: 35px;
  }

  .iconCopy {

    position: absolute;

      margin-top: 10px;
      padding: 2px;
      width: 20px;
      height: 20px;
      bottom: 10px;
      right: 10px;

      border-radius: 1px solid red;
      cursor: pointer;

      border: 3px solid #5284FF;
      border-radius: 50%;

    }

  .second {
      margin-top: 10px;
  }

  .priceWrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
  }

  .textContainer {
      max-width: 50%;
  }

`;
