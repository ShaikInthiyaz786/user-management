import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>User Management Dashboard</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/add-user">Add User</Link>
      </div>
    </nav>
  );
};

export default Navbar;
