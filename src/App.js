import SearchInput from "./SearchInput";

const App = () => {
  let unetaVrednost = "";

  const nekaFunc = () => {
    return "Dobili smo sertifikate";
  };

  const getInputedValue = (input, b) => {
    unetaVrednost = input;
    console.log(unetaVrednost, b);
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
        Camil={konzologujText}
      ></SearchInput>

      <h1 style={{ color: "blue", fontSize: "25px" }}>{nekaFunc()}</h1>
      <p>{nekiString.prop}</p>
    </div>
  );
};

export default App;
