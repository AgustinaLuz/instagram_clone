import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="NotFoundPageContainer">
            <Navbar />
            <h1>Sorry, this page isn't available.</h1>
            <p>The link you followed may be broken, or the page may have been removed. <NavLink to='/' >Go back to Instagram</NavLink></p>
        </div>
    );
}

export default NotFoundPage;