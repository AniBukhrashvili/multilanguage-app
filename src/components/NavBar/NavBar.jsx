import React, { useContext } from "react";

import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { MenuItem, Select } from "@mui/material";

import { LanguageContext } from "../../LanguageContext";
import { translations } from "../../translations";

const NavBar = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const navbarStrings = translations[language].navbar;

  const linkStyle = {
    margin: "6px",
    textDecoration: "none",
    color: "#fff",
    padding: "10px",
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
              {navbarStrings.iphone}
            </Link>
            <Link to="/ipad" style={linkStyle}>
              {navbarStrings.ipad}
            </Link>
            <Link to="/mac" style={linkStyle}>
              {navbarStrings.mac}
            </Link>
            <Link to="/watch" style={linkStyle}>
              {navbarStrings.watch}
            </Link>
            <Link to="/accessories" style={linkStyle}>
              {navbarStrings.accessories}
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              color: "white",
            }}
          >
            <Select
              sx={{
                height: "22px",
                color: "#fff",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
              }}
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
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
