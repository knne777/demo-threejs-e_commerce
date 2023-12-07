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
          <Card Model={Pegasus} color={'rgba(71, 78, 89, 1)'} />
        )
      },
      color:'red',
      title: "Nike Pegasus Trail 2 ",
      text: "El Tenis Nike Pegasus Trail 2 te dará durabilidad y eficacia para los corredores que aman estar al contacto con la naturaleza en diferentes senderos y montañas. Cuenta con un ajuste ideal con amortiguación suave y tracción resistente. Su suela de goma cuenta con un patrón para un estilo veloz. "
    },
    {
      Model: () => {
        return (<Card Model={AirForce} color={'rgba(50, 49, 54, 1)'} />)
      },
      color:'rgba(166, 203, 87, 1)',
      title: "NIKE AIR FORCE 1",
      text: "El fulgor sigue vivo en las Nike Air Force 1 ’07 LX, un modelo original de baloncesto que da una nota lujosa a los característicos revestimientos cosidos, los colores llamativos y al toque brillante ideal. El material reciclado de la parte superior imita la suntuosa textura de la pana. Los detalles con bordados brillantes realzan el patrón gráfico integral de camuflaje urbano. Renuevan el ADN del baloncesto para el mundo contemporáneo. "
    },

    {
      Model: () => {
        return (<Card Model={Running} color={'rgba(16, 33, 50, 1)'} />)
      },
      color: 'rgba(16, 33, 50, 1)',
      title: "Nike Quest 4",
      text: "La búsqueda de la velocidad continúa con el Nike Quest 4. La espuma de mayor altura y la comodidad amortiguada se combinan con una parte superior ligera que ofrece una sujeción segura. Los detalles intuitivos lo convierten en un calzado básico para el corredor de todos los días."
    },


  ]
  return (
    <>
      <div style={{ position: 'absolute', minHeight:'100vh', zIndex: 99, background:"rgba(0, 0, 0, 0.048)"}}>
        <Sliders Models={Models} />
      </div>
      <div style={{width:'100vw', height:100, background:'black', position:'absolute', bottom:0}}>

      </div>
    </>


  )
}

export default App
