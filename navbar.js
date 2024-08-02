import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
return(
<div>
<ul className="navbar">
<li><Link to="/">Home</Link></li>
<li><Link to="/about">About Us</Link></li>
<li><Link to="/contact">Contact Us</Link></li>
</ul>
</div>
)
}
export default Navbar;

