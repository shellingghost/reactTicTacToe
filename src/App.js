import React from 'react';
import { useState } from 'react';

function Square() {
  const [value, setValue] = useState(null);

  // nested function, not returning
  //    console call
  function handleClick() {
    setValue('X');
  }

  return (
    <button
      //properties of button- JSX component
      className="square"
      //passing function 
      //escaping JSX into javascript using braces

      //scope* - interesting
      //init var with js function
      // onClick/handleClick convention
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  // (state variable) defaults 9 null arr
  // board state - held and ref
  const [squares, setSquares] = useState(Array(9).fill(null));
  
  return (
    <React.Fragment>
      <div className= "board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]}/>
        <Square value={squares[2]}/>
      </div>
      
      <div className= "board-row">
        <Square value={squares[3]}/>
        <Square value={squares[4]}/>
        <Square value={squares[5]}/>
      </div>

      <div className= "board-row">
        <Square value={squares[6]}/>
        <Square value={squares[7]}/>
        <Square value={squares[8]}/>
      </div>

    </React.Fragment>
  );
}
