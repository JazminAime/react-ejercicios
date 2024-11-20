import "./App.css";
import AppCosteHotel from "./components/AppCosteHotel";
import Carrusel from "./components/Carrusel";
import Form from "./components/Form";
import TrafficLight from "./components/TrafficLight";

function App() {
  return (
    <div>
      <Carrusel />
      <TrafficLight />
      <Form />
      <AppCosteHotel />
    </div>
  );
}

export default App;
