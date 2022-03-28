import styled from "styled-components";

export const SearchStyled = styled.div`
  #wrap {
    margin: 50px 100px;
    display: inline-block;
    position: relative;
    height: 60px;
    padding: 0;
    position: relative;
  }

  input[type="text"] {
    height: 60px;
    font-size: 55px;
    display: inline-block;
    font-family: "Lato";
    font-weight: 100;
    border: none;
    outline: none;
    color: #555;
    padding: 3px;
    padding-right: 60px;
    width: 0px;
    position: absolute;
    top: 0;
    right: 0;
    background: none;
    z-index: 3;
    transition: width 0.4s cubic-bezier(0, 0.795, 0, 1);
    cursor: pointer;
  }

  input[type="text"]:focus:hover {
    border-bottom: 1px solid #bbb;
  }

  input[type="text"]:focus {
    width: 700px;
    z-index: 1;
    border-bottom: 1px solid #bbb;
    cursor: text;
  }
  input[type="submit"] {
    height: 67px;
    width: 63px;
    display: inline-block;
    color: red;
    background: url("../../icons/header/Search.svg");
    text-indent: -10000px;
    border: none;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    cursor: pointer;
    opacity: 0.4;
    cursor: pointer;
    transition: opacity 0.4s ease;
  }

  input[type="submit"]:hover {
    opacity: 0.8;
  }
`;
