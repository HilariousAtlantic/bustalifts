import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <Style.Navbar>
      <Style.Brand to="/">Bustalifts</Style.Brand>
    </Style.Navbar>
  );
}

const Style = {
  Navbar: styled.div`
    background: #2a2a2a;
    padding: 16px;
  `,
  Brand: styled(NavLink)`
    color: #f5f5f5;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 24px;
  `
};
