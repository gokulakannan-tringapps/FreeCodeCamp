import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Card from './component/Card';
import Batman_logo from './image/batman.png';
import Star_logo from './image/star-rating.png';
import WW_logo from './image/wonderwoman.jpg';
import SM_logo from './image/superman.jpg';
import Flash_logo from './image/flash.jpg';
import AM_logo from './image/aquaman.jpg';

function App() {
  return (
    <div className="App">
		<Navbar/>
		<Hero />
		<div className="cards">
		<Card img={Batman_logo} star={Star_logo} rating="7.7" place="Gotham City" name="Batman" title="The Vengeance" about="Batman is a ruthless vigilante who frequently killed or maimed criminals, but evolved into a character with a stringent moral code and strong sense of justice.
		Unlike most superheroes, Batman does not possess any superpowers, instead relying on his intellect, fighting skills, and wealth."/>
		
		<Card img={WW_logo} star={Star_logo} rating="9.2" place="Amazon Themyscira" name="Wonder Woman" title="Golden Armor" about="Wonder Woman is a compassionate caring, stubborn, opinionated, highly competitive, outgoing, immortal Amazon. Wonder Woman is a warrior born. She tries to avoid conflict but if pressed she will engage in battle and on occasion lose herself in the pleasure of battle."/>
		
		<Card img={SM_logo} star={Star_logo} rating="9.7" place="Krypton" name="Superman" title="Man Of Steel" about="Superhuman strength, super speed, stamina and invulnerability, freezing breath, super hearing, multiple extrasensory and vision powers, longevity, flight, and regeneration."/>
		
		<Card img={AM_logo} star={Star_logo} rating="8.5" place="Atlantis" name="Aquaman" title="Protector Of Ocean" about="A half-Atlantean, half-human who is reluctant to be king of the undersea nation of Atlantis. He is a member of the Justice League. He possesses superhuman strength, durability, and has the ability to manipulate hydrokinesis, the tides, communicate with sea creatures and swim at supersonic speeds."/>
		
		<Card img={Flash_logo} star={Star_logo} rating="8.8" place="Multiverse" name="Flash" title="Scarlet Speedster" about="Nicknamed the 'Scarlet Speedster', all incarnations of the Flash possess 'super speed', which includes the ability to run, move, and think extremely fast, use superhuman reflexes, and seemingly violate certain laws of physics."/>
		</div>
	</div>
  );
}

export default App;
