import React from 'react';

const Display = ({inputText, currentText}) => {
    return (
       <div id="display-container">
        <h4 id="display-upper-line">{inputText}</h4>
        <h2 id="display">{currentText}</h2> 
       </div> 
    )
  }

  export default Display;