import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // # Declarando los state (estados)
  const [color, setColor] = useState('#000000');
  const [manageInterval, setManageInterval] = useState(0);
  const [doubleClick, setDoubleClick] = useState(0);

  // # Funciones

  // * Método para cuando el ratón entre al contenedor un valor aleatorio
  const getColor = () => Math.floor(Math.random() * 256);

// * Método para generar el hexadecimal
  const getHex = (red, green, blue) => {
    return (
      '#' + [red, green, blue].map((c) => {
        const hex = c.toString(16);
        return hex.lenght === 1 ? '0' + hex : hex;
      })
      .join('')
    );
  };


  // * Métoro para el rgb 
  const generateHex = () => {
    const rgb = {
      r: getColor(),
      g: getColor(),
      b: getColor(),
    };
    return setColor(getHex(rgb.r, rgb.g, rgb.b));
  }


  // * Método para cambiar el color con intervalo
  const onChangeColor = () => {
    return setManageInterval(setInterval(generateHex, 1000));
  }

  // * Método para tener el cambio de color
  const onStopChangeColor = () => {
    return clearInterval(manageInterval);
  }

  // * Método para detener el cambio de color con click
  const onClickChangeColor = () => {
    return clearInterval(manageInterval);
  }



  return (
    <div className="App" >
      <div
        id='square'
        onMouseOver={onChangeColor}
        onMouseLeave={onStopChangeColor}
        onDoubleClick={onClickChangeColor}
        style={{ width: '255px', height: '255px', backgroundColor: color, margin: 'auto' }}
      ></div>{ ' ' }
      <p style={{color: 'black'}}>Color: {color}</p>
    </div>
  );
}

export default App;
