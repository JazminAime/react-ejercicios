const title = {
  color: "green",
};

const coste = 40;

const CosteAlquiler = ({ night }) => {
  let costeTotal = coste * night;

  if (night >= 3 && night < 7) {
    costeTotal = costeTotal - 20;
  } else if (night >= 7) {
    costeTotal = costeTotal - 50;
  }

  return (
    <div>
      <h3>Coste de Alquiler</h3>
      <p style={title}>
        El coste de alquiler de coche por {night} noches es:
        <span style={{ color: "red" }}> {costeTotal}</span>
      </p>
    </div>
  );
};

export default CosteAlquiler;
