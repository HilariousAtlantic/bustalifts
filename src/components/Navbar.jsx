import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <Styled.Navbar>
      <NavLink to="/">
        <Styled.Logo src="/logo.png" />
      </NavLink>
    </Styled.Navbar>
  );
}

const Styled = {
  Navbar: styled.div`
    background: #2a2a2a;
    padding: 16px;
  `,
  Logo: styled.img`
    height: 32px;
  `
};
