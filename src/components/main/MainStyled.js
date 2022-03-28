import styled from "styled-components";

export const MainStyled = styled.main`
  display: flex;
  background-color: ${(props) =>
    props.toggleDarkModeValue ? `#e5e5e5` : `	 #434323`};
  flex-grow: 1;
  margin-left: ${(props) => (props.isOpenSideBar ? `64px` : `none`)};

  .rigthWrapper {
    min-width: 20vw;
    background-color: ${(props) =>
      props.toggleDarkModeValue ? `#e5e5e5` : `#434323`};

    padding-top: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .rigthWrapper:last-child {
    margin-top: 20px;
  }
`;
