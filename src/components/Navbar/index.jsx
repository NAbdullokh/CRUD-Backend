import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Container } from "./style";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <h1 onClick={() => navigate("/")}>Logo</h1>
        <Link to="/add">Add</Link>
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;
