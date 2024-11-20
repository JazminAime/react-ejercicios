import { useState } from "react";
import CosteAlquiler from "./CosteAlquiler";
import CosteHotel from "./CosteHotel";
import "../App.css";
import Button1 from "../buttons/Button1";
import Button2 from "../buttons/Button2";

const AppCosteHotel = () => {
  const [night, setNight] = useState(0);

  const handleNight = (e) => {
    setNight(e.target.value);
  };

  return (
    <div className="container">
      <h1 className="prueba">Calculadora de costo de viaje</h1>
      <div>
        <label htmlFor="night">Cantidad de noches:</label> <br />
        <input
          type="number"
          value={night}
          onChange={handleNight}
          placeholder="Introduce la cantidad de noches"
          id="night"
          min="1"
        />
      </div>
      <CosteAlquiler night={night} />
      <CosteHotel night={night} />
      <Button1 />
      <Button2 />
    </div>
  );
};

export default AppCosteHotel;
