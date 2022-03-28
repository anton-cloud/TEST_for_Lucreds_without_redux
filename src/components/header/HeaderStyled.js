import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;

  .headerWrapper {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    flex-grow: 1;
    padding: 0 47px 0 17px;
    height: 52px;
    background: linear-gradient(90deg, #2e6aff 44.87%, #2e6aff 82.88%);
  }

  .headerLogo {
    text-transform: uppercase;
    text-decoration: none;
    color: #ffffff;

    font-family: Lato;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0em;
  }

  .headerSelect,
  .search {
    margin-left: 24px;
    height: 35px;
    width: 211px;
    left: 192px;
    border-radius: 5px;
  }

  .search {
    margin-left: none;
    min-width: 50px;
  }

  .searchWrapper {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }

  .leftContainer {
    display: flex;
    align-items: center;
  }

  .headerList {
    display: flex;
    align-items: center;
    list-style: none;

    margin-left: auto;
  }

  .headerItem {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .headerItem:not(:last-child) {
    margin-right: 20px;
  }

  .headerIcon {
    height: 26px;
    width: 26px;
  }
`;

export default HeaderStyled;
