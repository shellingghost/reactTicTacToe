import React from 'react';

function Square({value}) {
  // nested function, not returning
  //    console call
  function handleClick() {
    console.log('clicked!');
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
  return (
    <React.Fragment>
      <div className= "board-row">
        <Square value="1"/>
        <Square value="2"/>
        <Square value="3"/>
      </div>
      
      <div className= "board-row">
        <Square value="4"/>
        <Square value="5"/>
        <Square value="6"/>
      </div>

      <div className= "board-row">
        <Square value="7"/>
        <Square value="8"/>
        <Square value="9"/>
      </div>

    </React.Fragment>
  );
}
