import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function Navbar() {

    return(
      <div className="navbar_container">
        <div className="nav_bar_box">
          <div className="icons_boxed">
            <div className="icon_ig">
        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"></img>
        </div>
        <div className="icon_ig">
        <HomeIcon variant="contained"></HomeIcon>
        </div>
        <div className="icon_ig"><FavoriteBorderIcon variant="contained"></FavoriteBorderIcon></div>
        <div className="icon_ig"><AccountCircleOutlinedIcon variant="contained"></AccountCircleOutlinedIcon></div>
        </div>
        </div>
        </div>
    )
}

export default Navbar;