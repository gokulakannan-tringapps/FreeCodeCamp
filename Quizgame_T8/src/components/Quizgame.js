import React from 'react'

let score=0;
 const Marks = () =>{
            return {score}
}
export default function Quizgame(props){
    
    let changer =[]
    const [flag, setFlag]= React.useState([{id:1,status:false, },{id:2,status:false},{id:3,status:false},{id:4,status:false}])
    changer=[{id:1,status:false, },{id:2,status:false},{id:3,status:false},{id:4,status:false}]

   
    const [display, setDisplay]=React.useState(false);

    function handleClick(user){     
        changer[user.id-1].status=!changer[user.id-1].status
        setFlag(changer)
        
        if(!display){
            if(user.innerText == props.data.options[4]){
                score=score+1
                console.log(score)
                
            }           
        }
        setDisplay(true)
        
    }

   
    return(
        
        <main>
            <div className="Questions">
                   <h2>{props.data.index + 1}. {props.data.question}</h2>  
            </div>
            <div className="Options"  onClick={(user) =>handleClick(user.target)}>
                <button id={flag[0].id}  style={{color : flag[0].status ? "red" : "#0f3ea3"}} >{ props.data.options[0]}</button>
                <button id={flag[1].id}   style={{color : flag[1].status ? "red" : "#0f3ea3"}} >{ props.data.options[1]}</button>
                <button id={flag[2].id}    style={{color : flag[2].status ? "red" : "#0f3ea3"}} >{ props.data.options[2]}</button>
                <button id={flag[3].id}  style={{color : flag[3].status ? "red" : "#0f3ea3"}}>{ props.data.options[3]}</button>  
                {display && <p>Correct Answer :{props.data.options[4]} </p>}
            </div>
            
            
        </main>    
    )
}

export { Marks} ;