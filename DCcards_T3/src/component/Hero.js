import React from 'react';
import '../App.css';
import JLTeam from "../image/justiceleague2.jpeg";
export default function Hero(){
	return(
		<section className="hero">
				<img src={JLTeam} alt="JusticeLeague Wallpaper" className="JLTeam_Logo"/>
				<h1 className="hero_header">DC Comics</h1>
				<p className="hero_text">DC Comics, Inc. (or simply just DC) is an American comic book publisher and the flagship unit of DC Entertainment, a subsidiary of Warner Bros. 
				Discovery. DC Comics, Inc.
				DC Comics is one of the largest and oldest American comic book companies, with their first comic under the DC banner being published in 1937.</p>
		</section>
	);
}