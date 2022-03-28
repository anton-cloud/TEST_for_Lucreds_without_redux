import styled from "styled-components";

export const SideBarStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: #232323;
  flex-direction: column;
  width: 64px;
  padding-top: 12px;

  position: relative;

  .sideBarIcon {
    cursor: pointer;
    height: 26px;
    width: 26px;
  }

  .sideBarList {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    padding: 0;
    width: 64px;
    background-color: #232323;
    padding-top: 60px;
    margin-top: 40px;
    min-height: calc(100vh - 112px);
    position: absolute;
  }

  .sideBarItem:not(:first-child) {
    margin-top: 30px;
  }

  .sideBarItem {
    list-style: none;

    padding: 6px;

    transition: border 450ms;
  }

  .sideBarItem:hover {
    background-color: #3576ff;
    border: 1.5px solid #f9f9f9;
    border-radius: 50%;
  }
`;

export default SideBarStyled;
