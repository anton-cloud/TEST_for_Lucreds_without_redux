import React from "react";
import { FooterStyled } from "./FooterStyled";

const Footer = ({ isOpenSideBar }) => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterStyled isOpenSideBar={isOpenSideBar}>
      <p>Corporation © {currentYear} | All Rights Reserved.</p>
    </FooterStyled>
  );
};

export default Footer;
