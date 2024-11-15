// import Light from "../components/Light";

import { useState } from "react";
import Light from "./Light";

const TrafficLight = () => {
  const [colorActual, setColorActual] = useState("");

  const cambiarColor = (color) => {
    setColorActual(color);
  };

  return (
    <>
      <h1>Semáforo</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#333",
          padding: "20px",
          borderRadius: "10px",
          width: "120px",
          height: "300px",
          margin: "auto",
        }}>
        <Light
          color={colorActual === "rojo" ? "red" : "gray"}
          hacerClick={() => cambiarColor("rojo")}
        />
        <Light
          color={colorActual === "amarillo" ? "yellow" : "gray"}
          hacerClick={() => cambiarColor("amarillo")}
        />
        <Light
          color={colorActual === "verde" ? "green" : "gray"}
          hacerClick={() => cambiarColor("verde")}
        />
      </div>
    </>
  );
};

export default TrafficLight;
