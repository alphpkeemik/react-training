import React from "react";
import {Link} from "react-router-dom";
const styles = require("./Navbar.module.css");

const Navbar = () => {

    return (
        <nav className={styles.navbar} >
            <Link className={styles.navLink} to="/">Home</Link>
            <Link className={styles.navLink} to="/register">Sign up</Link>
        </nav>
    );
};


export default Navbar;
