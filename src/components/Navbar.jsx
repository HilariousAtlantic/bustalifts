import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <Style.Navbar>
      <NavLink to="/">
        <Style.Logo src="/logo.png" />
      </NavLink>
    </Style.Navbar>
  );
}

const Style = {
  Navbar: styled.div`
    background: #2a2a2a;
    padding: 16px;
  `,
  Logo: styled.img`
    height: 32px;
  `
};
