import React from "react";
import Navbar from "../Navbar/Navbar";

const Header = ({ logo, cars }) => {
  // console.log(cars);
  // console.log(logo);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}>
      <img src={logo} alt="" width={"200px"} />
      <Navbar cars={cars} />
    </div>
  );
};

export default Header;
