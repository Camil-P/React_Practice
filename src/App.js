import SearchInput from "./SearchInput";
import { useState } from "react";

const App = () => {
  const [inputedValue, setInputedValue] = useState("Daris");

  const nekaFunc = () => {
    return "Dobili smo sertifikate";
  };

  const getInputedValue = (input) => {
    setInputedValue(input);
    console.log(inputedValue);
  };

  const konzologujText = () => {
    console.log("HEJ TI NEPISMENI COVECE");
  };

  const nekiString = { prop: "Prikaz stringa" };

  return (
    <div>
      <SearchInput
        getInput={getInputedValue}
        buttonText="Nikola"
        handleOnClick={konzologujText}
      ></SearchInput>

      <h1 style={{ color: "blue", fontSize: "25px" }}>{inputedValue}</h1>
      <p>{nekiString.prop}</p>
    </div>
  );
};

export default App;
