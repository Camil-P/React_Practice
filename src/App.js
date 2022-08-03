import SearchInput from "./SearchInput";
import { useState } from "react";

const App = () => {
  const [inputedValue, setInputedValue] = useState("Daris");
  const [inputedImage, setinputedImage] = useState(null);
  console.log(inputedImage);

  const nekaFunc = () => {
    return "Dobili smo sertifikate";
  };

  const getInputedValue = (input) => {
    setInputedValue(input);
  };

  const getImage = (image) => {
    var reader = new FileReader();

    reader.onload = function (event) {
      setinputedImage(event.target.result);
    };

    reader.readAsDataURL(image);
  };

  const nekiString = { prop: "Prikaz stringa" };

  return (
    <div>
      <SearchInput
        getInput={getInputedValue}
        buttonText="Nikola"
        handleOnClick={getImage}
      ></SearchInput>

      <h1 style={{ color: "blue", fontSize: "25px" }}>{inputedValue}</h1>
      <img src={inputedImage}></img>
      <p>{nekiString.prop}</p>
    </div>
  );
};

export default App;
