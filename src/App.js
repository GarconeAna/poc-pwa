import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const nameLocal = localStorage.getItem("Name");
  console.log(nameLocal)

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setLocation(`latitude: ${latitude}, longitude: ${longitude}`);
      })
    } else {
      setLocation("error")
    }
  }

  const saveName = () => {
    localStorage.setItem("Name", name);
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-evenly",
    }}>
      <div>
        <p>{`Seu nome: ${name || nameLocal || "-"}`}</p>
        <input 
          type="text"
          value={name}
          onChange={handleName}
          placeholder="Digite seu nome"
        />
        <button onClick={saveName}>salvar</button>
      </div>

      <div>
        <p>{`Sua localização: ${location || "-"}`}</p>
        <button onClick={handleLocation}>obter localização</button>
      </div> 
    </div>
  );
}

export default App;