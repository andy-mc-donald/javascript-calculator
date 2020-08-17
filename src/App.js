import React, { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";
import "./App.css";

const App = () => {
  //inputString is the full calculation string (displayed on the top line of calculator)
  //inputCurrent is the current input (displayed on the second, main line of the calculator)
  //lastInput tracks the last keypress and is not displayed anywhere
  const [inputString, setInputString] = useState(" ");
  const [inputCurrent, setInputCurrent] = useState("0");
  const [lastInput, setLastInput] = useState("");

  //IF YOU CLICK A NUMBER LOGIC...
  const handleNumClick = (e) => {
    let num = e.target.value;
    let length = inputCurrent.length;
    //setInputString
    if ((inputCurrent === "0" && num === "0") || length >= 30) {
      return;
    }
    if (lastInput === "=") {
      setInputString(num);
    } else {
      setInputString(inputString + num);
    }
    //setInputCurrent
    if (length >= 30) {
      return;
    }
    if (inputCurrent === "0") {
      setInputCurrent(num);
    }
    if (
      lastInput === "+" ||
      lastInput === "/" ||
      lastInput === "*" ||
      lastInput === "" ||
      lastInput === "-" ||
      lastInput === "="
    ) {
      setInputCurrent(num);
    } else {
      setInputCurrent(inputCurrent + num);
    }
    //setLastInput
    setLastInput(num);
  };

  //IF YOU CLICK AN OPERATOR KEY (+, /, *) LOGIC
  const handleOperator = (e) => {
    let op = e.target.value;
    let prev = inputString[inputString.length - 2];

    //setInputString
    if (lastInput === "" || inputString === " -") {
      return;
    } else if (lastInput === "=") {
      setInputString(inputCurrent + op);
    } else if (
      (lastInput === "-" && prev === "+") ||
      (lastInput === "-" && prev === "/") ||
      (lastInput === "-" && prev === "*")
    ) {
      let deductLastTwo = inputString.slice(0, inputString.length - 2);
      setInputString(deductLastTwo + op);
    } else if (
      lastInput === "+" ||
      lastInput === "/" ||
      lastInput === "*" ||
      lastInput === "-"
    ) {
      let deductLast = inputString.slice(0, inputString.length - 1);
      setInputString(deductLast + op);
    } else {
      setInputString(inputString + op);
    }
    //setting inputCurrent and lastInput
    setInputCurrent(op);
    setLastInput(op);
  };

  //IF YOU CLICK MINUS KEY LOGIC
  const handleMinus = (e) => {
    let min = e.target.value;
    if (lastInput === "-") {
      return;
    }

    if (lastInput === "=") {
      setInputString(inputCurrent + min);
    } else {
      setInputString(inputString + min);
    }

    setInputCurrent(min);
    setLastInput(min);
  };

  // IF YOU CLICK DECIMAL LOGIC
  const handleDecimal = (e) => {
    let dec = e.target.value;

    //setInputCurrent
    if (inputCurrent.includes(".") && lastInput !== "=") {
      return;
    }
    if (
      inputCurrent === "+" ||
      inputCurrent === "/" ||
      inputCurrent === "*" ||
      inputCurrent === "-"
    ) {
      setInputCurrent("0.");
    } else {
      setInputCurrent(inputCurrent + dec);
    }
    //setInputString
    if (
      lastInput === "+" ||
      lastInput === "/" ||
      lastInput === "*" ||
      lastInput === "" ||
      lastInput === "-"
    ) {
      setInputString(inputString + "0.");
    } else {
      setInputString(inputString + dec);
    }
    //setLastInput
    setLastInput(dec);
  };

  //IF YOU PRESS EQUALS LOGIC
  const handleEquals = (e) => {
    let eq = e.target.value;
    let prev1 = inputString[inputString.length - 1];
    let prev2 = inputString[inputString.length - 2];

    //This function works out the sum:
    let sum = (math) => {
      return Function(`return (${math})`)();
    };
    if (lastInput === eq || lastInput === "" || inputString === " -") {
      return;
    }
    if (prev2 === "+" || prev2 === "/" || prev2 === "*") {
      let deductLast2 = inputString.slice(0, inputString.length - 2);
      let answer = sum(deductLast2);
      setInputString(deductLast2 + eq + answer);
      setInputCurrent(answer);
      setLastInput(eq);
    }
    if (prev1 === "+" || prev1 === "/" || prev1 === "*" || prev1 === "-") {
      let deductLast = inputString.slice(0, inputString.length - 1);
      let answer = sum(deductLast);
      setInputString(deductLast + eq + answer);
      setInputCurrent(answer);
      setLastInput(eq);
    } else {
      let answer = sum(inputString);
      setInputString(inputString + eq + answer);
      setInputCurrent(answer);
      setLastInput(eq);
    }
  };

  //IF YOU PRESS THE CLEAR BUTTON LOGIC
  const handleClear = () => {
    setInputString(" ");
    setInputCurrent("0");
    setLastInput("");
  };

  return (
    <div id="container">
      <div id="calculator">
        <Display inputText={inputString} currentText={inputCurrent} />
        <Buttons
          numClick={handleNumClick}
          operatorClick={handleOperator}
          minusClick={handleMinus}
          decimalClick={handleDecimal}
          clearAll={handleClear}
          equalsClick={handleEquals}
        />
      </div>
    </div>
  );
};

export default App;
