import React from "react";
import {
  HeaderMain,
  HeaderContainer,
  HeaderLogo,
  HeaderText,
} from "./HeaderElements";
import Logo from "../../images/userlist.png";

function Header() {
  return (
    <HeaderMain>
      <HeaderContainer>
        <HeaderLogo src={Logo}></HeaderLogo>
        <HeaderText>Homework for Digital Natives Part II</HeaderText>
      </HeaderContainer>
    </HeaderMain>
  );
}

export default Header;
