import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { NavLink } from "react-router-dom";

function Navbar() {

    return(
      <div className="navbar_container">
        <div className="nav_bar_box">
          <div className="icons_boxed">
            <div className="icon_ig">
        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"></img>
        </div>
        <div className="icon_ig">
          <NavLink to='/' >
            <HomeIcon variant="contained"></HomeIcon>
          </NavLink>
        </div>
        <div className="icon_ig">
          <NavLink to='/saved' >
            <FavoriteBorderIcon variant="contained"></FavoriteBorderIcon>
          </NavLink>
        </div>
        <div className="icon_ig">
          <NavLink to='/profile' >
            <AccountCircleOutlinedIcon variant="contained"></AccountCircleOutlinedIcon>
          </NavLink>
        </div>
        </div>
        </div>
      </div>
    )
}

export default Navbar;