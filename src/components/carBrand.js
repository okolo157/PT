import { useState } from "react";

export default function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
    vin: 1991,
  });

  

  function handleSetBrand() {
    setCar((previousState) => {
      return { ...previousState, brand: "toyota", model: "corolla" };
    });
  }

  const handleSetYear = () => {
    setCar((previousState) => {
      return { ...previousState, year: "2000" };
    });
  };

  const handleSetColor = () => {
    setCar((previousState) => {
      return { ...previousState, brand: "toyota", color: "blue" };
    });
  };

  const handleSetVin = () => {
    setCar((previousState) => {
      return { ...previousState, vin: "0987321" };
    });
  };

  return (
    <div style={{ backgroundColor: "red", padding: "100px" }}>
      <h1>My car</h1>
      <p>
        It is a {car.color} {car.brand} {car.model} from {car.year} with vin of{" "}
        {car.vin}
      </p>
      <button onClick={handleSetBrand}>Change brand</button>
      <button onClick={handleSetYear}>Change Year</button>
      <button onClick={handleSetColor}>Change Color</button>
      <button onClick={handleSetVin}>Change Vin</button>
    </div>
  );
}
