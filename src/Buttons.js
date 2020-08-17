import React from 'react';

const Buttons = ({ numClick, clearAll, operatorClick, minusClick, decimalClick, equalsClick }) => {
    return (
      <div id="buttons-container">
        <input id="clear" type="button" value="Clear" onClick={clearAll} />
        <input id="divide" type="button" value="/" onClick={operatorClick} />
        <input id="seven" type="button" value="7" onClick={numClick} />
        <input id="eight" type="button" value="8" onClick={numClick} />
        <input id="nine" type="button" value="9" onClick={numClick} />
        <input id="multiply" type="button" value="*" onClick={operatorClick} />
        <input id="four" type="button" value="4" onClick={numClick} />
        <input id="five" type="button" value="5" onClick={numClick} />
        <input id="six" type="button" value="6" onClick={numClick} />
        <input id="subtract" type="button" value="-" onClick={minusClick} />
        <input id="one" type="button" value="1" onClick={numClick} />
        <input id="two" type="button" value="2" onClick={numClick} />
        <input id="three" type="button" value="3" onClick={numClick} />
        <input id="add" type="button" value="+" onClick={operatorClick} />
        <input id="zero" type="button" value="0" onClick={numClick} />
        <input id="decimal" type="button" value="." onClick={decimalClick} />
        <input id="equals" type="button" value="=" onClick={equalsClick} />
      </div>  
    )  
  }

  export default Buttons;