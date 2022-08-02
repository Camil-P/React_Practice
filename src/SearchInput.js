const SearchInput = ({ handleOnClick, buttonText, getInput }) => {
  return (
    <div>
      <input
        onChange={(el) => {
          getInput(el.target.value);
        }}
      ></input>
      <button onClick={handleOnClick}>{buttonText}</button>
    </div>
  );
};

export default SearchInput;
