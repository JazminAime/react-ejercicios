import { useState } from "react";

const Form = () => {
  const [grados, setGrados] = useState(0);
  const [resultado, setResultado] = useState(0);

  const convertir = () => {
    const fahrenheit = (parseFloat(grados) * 9) / 5 + 32;
    setResultado(fahrenheit);
    setGrados(0);
  };
  return (
    <div>
      <h1>Grados centígrados</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="grados">Ingrese los grados centígrados:</label>
        <br />
        <input
          type="number"
          name="grados"
          id="grados"
          value={grados}
          onChange={(e) => setGrados(e.target.value)}
        />
        <br />
        <button onClick={() => convertir()}>
          Convertir a grados Farenheit
        </button>
      </form>
      {resultado && (
        <h3>La temperatura en grados Farenheit es: {resultado} °F</h3>
      )}
    </div>
  );
};

export default Form;
