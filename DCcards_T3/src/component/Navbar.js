import React from 'react';
import '../App.css';
import JL_logo from '../image/justiceleague.png';
export default function Navbar(){
	return(
		<nav>
				<img src={JL_logo} alt="Justice League Logo" className="Navbar_logo"/>
				<h1 className="Navbar_text">Justice League</h1>
		</nav>
	);
}