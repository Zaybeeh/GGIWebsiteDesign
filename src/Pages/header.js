import React from "react";
import {NavLink} from 'react-router-dom'
import "./../Assets/css/style.css";
import "./../Assets/css/responsive.css";
import {Logo} from "../Utilities/Icons.js";
import {Link} from 'react-router-dom';


function Header(){
	return (
		<header className="header d-flex">
			<div className="container-fluid d-flex align-items-center justify-content-md-between mobile_nav">
				<a href="/" className="logo d-flex align-items-center navbar_logo_box">
					<img className="logo_img" src={Logo.logo} alt=""></img>
				</a>
				<nav id="navbar" className="navbar navbar_nav_box">
					<ul>
						<li><a href="/visit_visa" exact activeClassName="active" to='/visit_visa'>Visit Visa</a></li>
						<li><a href="/study_permit" activeClassName="active" to='/study_permit'>Study Permit</a></li>
						<li><a href="/work_visa" activeClassName="active" to='/work_visa'>Work Visa</a></li>
						<li><a href="/business_visa" activeClassName="active" to='/business_visa'>Business Visa</a></li>
						<li><a href="/immigrate" activeClassName="active" to='/immigrate'>Immigration</a></li>
						<li><a href="/about_us" activeClassName="active" to='/about_us'>About Us</a></li>
						<li><a href="/contactus" activeClassName="active" to='/contactus'>Contact Us</a></li>
						<li><a href="/blogs" activeClassName="active" to='/blogs'>Blog</a></li>
					</ul>
				</nav>
				<i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
				<i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
			</div>
		</header>
	);
}

export default Header;
