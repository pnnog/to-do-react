/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';
import Button from './Button';

function Event() {
  const [showHello, setShowHello] = useState(false);

  function Saudacao() {
    setShowHello(!showHello);
  }

  return (
    <div>
      {!showHello && (
        <div>
          <h1>Quer saber quem é o gostoso?</h1>
          <Button event={Saudacao} text="Mostrar gostoso" />
        </div>
      )}

      {showHello && (
        <div>
          <h1>VOCÊ CARALHO</h1>
          <Button event={Saudacao} text="Ocultar Gostoso" />
        </div>
      )}
    </div>
  );
}

export default Event;
