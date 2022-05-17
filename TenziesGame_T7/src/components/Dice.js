import React from 'react'

export default function Dice(props){

        const styles ={
            backgroundColor : props.status ? "#60ccaf" : "#c88cd1"
        }
    return(
        <div className="dice_layout" style={styles} onClick={props.hold_Dice}>
            {props.value}
        </div>
    );
}