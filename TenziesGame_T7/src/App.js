import React from 'react';
import './App.css';
import Dice from './components/Dice' 
import {nanoid} from 'nanoid'

function App() {
  
  const  [dice,setDice]= React.useState(createRandomDice())
  const  [result,setResult]= React.useState(false)

  React.useEffect( () => {
          const finalValue = dice.every(diceElements => diceElements.flag)
          const firstElement= dice[0].value

          const checkSame = dice.every(diceElements => diceElements.value === firstElement)

          if( finalValue && checkSame){
            setResult(true)
            alert("Congratulations ! , You Won")
          }

        }, [dice])

  function createNewDice(){
    return {
      value:Math.ceil(Math.random()*10),
      flag:false,
      id:nanoid()
    }
  }
  
  
  function createRandomDice(){
    const randomDice=[]
        for(let i=0; i<10; i++){
          randomDice.push( createNewDice() )
        }
        return randomDice
  }

  function rollDice(){
      setDice( oldDice => oldDice.map( dice => { return dice.flag ? dice : createNewDice() }))
  }

  function holdDice(id){
      setDice( oldDice => oldDice.map ( dice => { return dice.id === id ? 
        {...dice, flag: !dice.flag} : dice } ) )
  }

  const diceElements = dice.map( diceNumber => <Dice key={diceNumber.id}  
                                                     value={diceNumber.value} 
                                                     status={diceNumber.flag}
                                                     hold_Dice={ () => holdDice(diceNumber.id)} />)
  
  return (
    <main >
          <h1 className='title'>Richie & Tenzies </h1>
          <p className='instruction'>"Roll Until All Dice Numbers Are Same". Click each die to freeze it at its current value between rolls. </p>
          <div className="dice_board">
              {diceElements}
          </div>
           <button className="rollButton" onClick={rollDice}> {result ? "New Game" : "Roll it !!" }  </button> 
    </main>
  );
}

export default App;
