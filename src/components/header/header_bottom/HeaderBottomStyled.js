import styled from "styled-components";

export const HeaderBottomStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #fff;
  height: 52px;
  margin-left: ${(props) => (props.isOpenSideBar ? `64px` : `none`)};

  .leftWrapper {
    display: flex;
    align-items: center;

    /* justify-content: space-around; */
  }

  .list {
    display: flex;
    justify-content: space-around;
    list-style: none;
    /* flex-grow: 1; */
    width: 85vw;
    height: 52px;

    margin: 0;
    padding: 0;
  }

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: solid 3px;
    border-color: #2e6aff;
  }

  .icon {
    height: 25px;
    width: 25px;
  }

  .description {
    margin-left: 10px;
    font-family: Abel;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }

  .value {
    font-family: Abel;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    line-height: 23px;

    color: #0071fb;
    margin-left: 32px;
  }

  .value_accent {
    font-family: Abel;
    color: #707070;
  }

  .switchWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 15vw;
  }
`;
