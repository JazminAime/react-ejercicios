import { useState } from "react";

const Carrusel = () => {
  const elements = [
    {
      id: 1,
      src: "https://media.istockphoto.com/id/112273949/es/foto/amarillo-flores.jpg?s=1024x1024&w=is&k=20&c=q7lVkK7rmpe6iFfKjDwj9YrojhTradhU4J_i8Subxlk=",
      alt: "Imagen 1",
    },
    {
      id: 2,
      src: "https://cdn.pixabay.com/photo/2024/07/23/13/03/moon-8915307_1280.png",
      alt: "Imagen 2",
    },
    {
      id: 3,
      src: "https://cdn.pixabay.com/photo/2023/11/03/12/22/toadstool-8362901_960_720.jpg",
      alt: "Imagen 3",
    },
  ];

  const [imgActual, setImgActual] = useState(0);

  //   const imgAnterior = () => {
  //     setImgActual((index) => (index - 1 + elements.length) % elements.length);
  //   };

  //   const imgSiguiente = () => {
  //     setImgActual((index) => (index + 1) % elements.length);
  //   };

  const imgAnterior = () => {
    setImgActual((prev) => (prev + 1 < elements.length ? prev + 1 : 0));
  };

  // Función para retroceder a la imagen anterior
  const imgSiguiente = () => {
    setImgActual((prev) => (prev === 0 ? elements.length - 1 : prev - 1));
  };

  return (
    <div>
      <h1>Carrusel</h1>
      <div>
        <img
          src={elements[imgActual].src}
          alt={elements[imgActual].alt}
          style={{ width: "300px", height: "300px" }}></img>
      </div>
      <button onClick={imgAnterior}>⬅️</button>
      <button onClick={imgSiguiente}>➡️</button>
    </div>
  );
};

export default Carrusel;
