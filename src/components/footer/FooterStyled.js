import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  align-items: center;
  justify-content: end;
  background-color: #ffffff;
  height: 64px;
  padding: 0 44px;
  margin-left: ${(props) => (props.isOpenSideBar ? `64px` : `none`)};
`;
