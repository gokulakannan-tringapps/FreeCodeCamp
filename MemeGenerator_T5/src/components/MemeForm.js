import React from "react"
import '../App.css';
import MemesData from './MemesData'
export default function MemeForm(){
		let urlm;
		const [meme,setMeme]=React.useState(
			{
				topText:"",
				bottomText:"",
				randomImage:"https://imgflip.com/s/meme/Buff-Doge-vs-Cheems.png"
			}
		);
		function getMemeImage(){
				
				const memesArray = MemesData.data.memes
				console.log(memesArray)
				const randomNumber = Math.floor(Math.random() * (memesArray.length-1) +1 )
				const urlm=memesArray[randomNumber].url
				setMeme(prevMeme => ({...prevMeme, randomImage:urlm}))

				console.log(randomNumber)
					
		}

		function handleChange(event){
			const {name, value}=event.target
			setMeme(prevMeme => ({ ...prevMeme,[name]:value}))
		}
		
		
		return(
				<main>
						<div className="meme_form">
							<input type="text" placeholder="Top Text" className="form_input" 
							name="topText" 
							value={meme.topText}
							onChange={handleChange}
							/>
							<input type="text" placeholder="Bottom Text" className="form_input" 
							name="bottomText" 
							value={meme.bottomText}
							onChange={handleChange} />
							<button className="form_button" onClick={getMemeImage } >Get a new Meme</button>
							
						</div>
						<div className="memeOutput">
						<img src={meme.randomImage} alt="meme" className="memeImage"/>
						<h2 className="memeToptext">{meme.topText}</h2>
						<h2 className="memeBottomtext">{meme.bottomText}</h2>
						</div>
				</main>
				
		);
		
}