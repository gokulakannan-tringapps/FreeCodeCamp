import React from "react"
import '../App.css';
import MemeLogo from '../image/doge.jpg';
export default function Header(){
		return(
				<header className="header_section">
						<img src={MemeLogo} alt="meme logo" className="meme_logo" />
						<h3 className="header_title">Cheems Meme Generator</h3>
						<h4 className="header_title_2">React Course Project</h4>
				</header>
		);
}