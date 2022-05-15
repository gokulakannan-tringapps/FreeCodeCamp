import React from "react"
import '../App.css';
import MemesData from './MemesData'
export default function MemeForm(){
		let urlm;
		const [meme,setMeme]=React.useState("");
		function getMemeImage(){
				
				const memesArray = MemesData.data.memes
				
				const randomNumber = Math.floor(Math.random() + memesArray.length)
				
				setMeme(memesArray[randomNumber-1].url)
					
		}
		
		
		return(
				<main>
						<div className="meme_form">
							<input type="text" placeholder="Top Text" className="form_input" />
							<input type="text" placeholder="Bottom Text" className="form_input" />
							<button className="form_button" onClick={getMemeImage } >Get a new Meme</button>
							
						</div>
						
						<img src={meme} alt="meme" width="30%"/>
				</main>
				
		);
		
}