const SearchInput = ({ Camil, buttonText, getInput }) => {
  return (
    <div>
      <input
        onChange={(el) => {
          getInput(el.target.value, "nikola");
        }}
      ></input>
      <button onClick={Camil}>{buttonText}</button>
    </div>
  );
};

export default SearchInput;
