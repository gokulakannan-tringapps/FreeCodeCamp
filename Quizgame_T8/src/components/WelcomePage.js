import React from 'react'
import App from '../App'
import '../App.css'

export default function WelcomePage(props){
    const [check,setCheck] = React.useState(true)
    
    function handleClick()
    {
        setCheck(false)
        
    }
    
    return(
        <div>
             {check && <div className='Welcome'><h1 >Quiz Game</h1>
            <p  >Are You Ready for the Challenge?</p>
            <button className='WelcomeBtn' onClick={handleClick}>Start the Quiz</button></div>}
        
            {!check && <App/>}
        </div>
    )
}