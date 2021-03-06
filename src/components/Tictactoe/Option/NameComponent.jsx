import React from 'react';
import './NameComponent.css';

const NameComponent = (props) => {
    //Variable to display the player number dynamically
    let player = "Player " + props.playerIndex;

    //Variable to pass to the class name of the input DOM
    let playerClass = "player-" + props.playerIndex;

    return (
        <div className="name-input-div">
            Enter name for {player}
            <input className={playerClass} onChange={props.nameOnChangeFunction}></input>
        </div>
    )
}

export default NameComponent;