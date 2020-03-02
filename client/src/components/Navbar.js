import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul class="navbar-nav mr-auto">
        <Link to="/" class="nav-link">
          Mentor Listing
        </Link>
        <Link to="/addmentor" class="nav-link">
          Add Mentor
        </Link>
      </ul>
    </nav>
  );
};
