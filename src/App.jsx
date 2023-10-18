import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

import { Sliders } from './Components/Sliders'
import { Card } from './Components/Card';
import { Pegasus } from './Components/Sneakers/Pegasus';
import { AirForce } from './Components/Sneakers/AirForce';
import { Low } from './Components/Sneakers/Low';
import { AirPegasus } from './Components/Sneakers/AirPegasus';
import { Running } from './Components/Sneakers/Running';



function App() {
  const [count, setCount] = useState(0)
  var Models = [
    {
      Model: () => {
        return (
          <Card Model={Pegasus} />
        )
      },
      title: "Nike Pegasus Trail 2 ",
      text: "El Tenis Nike Pegasus Trail 2 te dará durabilidad y eficacia para los corredores que aman estar al contacto con la naturaleza en diferentes senderos y montañas. Cuenta con un ajuste ideal con amortiguación suave y tracción resistente. Su suela de goma cuenta con un patrón para un estilo veloz. "
    },
    {
      Model: () => {
        return (<Card Model={AirForce} />)
      },
      title: "NIKE AIR FORCE 1",
      text: "El fulgor sigue vivo en las Nike Air Force 1 ’07 LX, un modelo original de baloncesto que da una nota lujosa a los característicos revestimientos cosidos, los colores llamativos y al toque brillante ideal. El material reciclado de la parte superior imita la suntuosa textura de la pana. Los detalles con bordados brillantes realzan el patrón gráfico integral de camuflaje urbano. Renuevan el ADN del baloncesto para el mundo contemporáneo. "
    },

    {
      Model: () => {
        return (<Card Model={Running} />)
      },
      title: "Nike Quest 4",
      text: "La búsqueda de la velocidad continúa con el Nike Quest 4. La espuma de mayor altura y la comodidad amortiguada se combinan con una parte superior ligera que ofrece una sujeción segura. Los detalles intuitivos lo convierten en un calzado básico para el corredor de todos los días."
    },


  ]
  return (
    <>
      <div style={{position:'absolute', bottom:0, zIndex:99 }}>
      <Sliders Models={Models} />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{position:'absolute',bottom:0}}>
        <path fill="#273036" fill-opacity="1" d="M0,160L48,149.3C96,139,192,117,288,144C384,171,480,245,576,240C672,235,768,149,864,138.7C960,128,1056,192,1152,186.7C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </>


  )
}

export default App
