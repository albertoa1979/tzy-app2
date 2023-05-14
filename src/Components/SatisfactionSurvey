import React, { useState } from "react";

function Encuesta() {
  const [respuesta, setRespuesta] = useState(0);

  const handleRespuesta = (valor) => {
    setRespuesta(valor);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se puede enviar la respuesta a un servidor o realizar otras acciones
    console.log("La respuesta fue:", respuesta);
  };

  return (
    <div>
      <h2>Encuesta de satisfacción</h2>
      <form onSubmit={handleSubmit}>
        <p>¿Qué tan satisfecho estás con nuestro servicio?</p>
        <label>
          1
          <input type="radio" name="respuesta" value="1" onClick={() => handleRespuesta(1)} />
        </label>
        <label>
          2
          <input type="radio" name="respuesta" value="2" onClick={() => handleRespuesta(2)} />
        </label>
        <label>
          3
          <input type="radio" name="respuesta" value="3" onClick={() => handleRespuesta(3)} />
        </label>
        <label>
          4
          <input type="radio" name="respuesta" value="4" onClick={() => handleRespuesta(4)} />
        </label>
        <label>
          5
          <input type="radio" name="respuesta" value="5" onClick={() => handleRespuesta(5)} />
        </label>
        <br />
        <button type="submit">Enviar respuesta</button>
      </form>
    </div>
  );
}

export default Encuesta;
