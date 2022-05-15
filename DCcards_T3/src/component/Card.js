import React from 'react';
import '../App.css';


export default function Card(props){
	return(
		<div className="card_section">
			<img src={props.img} alt="Batman" className="card_image" />
			<div className="card_stats">
					<img src={props.star} alt="rating" className="rating_star"/>
					<span>{props.rating}</span>
					<span className="gray">/10 </span>
			</div>
			<span className="gray">From {props.place}</span>
			<h2 className="card_title">{props.name}</h2>
			<h3 className="card_title"> {props.title}</h3>
			<p>{props.about}</p>
		</div>	
	);
}