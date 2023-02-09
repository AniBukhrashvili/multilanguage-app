import React from "react";

import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { MenuItem, Select } from "@mui/material";

const NavBar = () => {
  const linkStyle = {
    margin: "6px",
    textDecoration: "none",
    color: "#fff",
  };

  return (
    <>
      <AppBar
        sx={{
          bgcolor: "#0B415A",
        }}
      >
        <Toolbar>
          <Link to="/" style={linkStyle}>
            LOGO
          </Link>
          <Box sx={{ flexGrow: 1, textAlign: "center" }}>
            <Link to="/iphone" style={linkStyle}>
              iPhone
            </Link>
            <Link to="/ipad" style={linkStyle}>
              iPad
            </Link>
            <Link to="/mac" style={linkStyle}>
              Mac
            </Link>
            <Link to="/watch" style={linkStyle}>
              Watch
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              color: "white",
            }}
          >
            <Select sx={{ height: "22px", color: "#fff" }}>
              <MenuItem value="en">EN</MenuItem>
              <MenuItem value="ge">GE</MenuItem>
            </Select>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
