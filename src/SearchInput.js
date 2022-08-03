import { useState } from "react";

const SearchInput = ({ handleOnClick, buttonText, getInput }) => {
  const [inputedImg, setInputedImg] = useState(null);
  console.log(inputedImg);

  return (
    <div>
      <input
        onChange={(el) => {
          getInput(el.target.value);
        }}
      ></input>

      <input
        type="file"
        onChange={(el) => setInputedImg(el.target.files[0])}
      ></input>

      <button onClick={() => handleOnClick(inputedImg)}>{buttonText}</button>
    </div>
  );
};

export default SearchInput;
