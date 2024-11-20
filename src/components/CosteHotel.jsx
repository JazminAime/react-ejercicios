/* eslint-disable react/prop-types */
import style from "../Components.module.css";
const CosteHotel = ({ night }) => {
  console.log(style.prueba);
  console.log(style.test);
  console.log(style);
  const coste = 140;

  let costeTotal = night * coste;
  return (
    <div>
      <h3 className={style.prueba}>Coste total de Estadía</h3>
      <p className={style.test}>
        El coste de su estadía por {night} noches es:
        <span style={{ color: "red" }}> {costeTotal}</span>
      </p>
    </div>
  );
};

export default CosteHotel;
