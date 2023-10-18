import Carousel from 'react-bootstrap/Carousel';
import { Canvas } from '@react-three/fiber'
export function Sliders({ Models }) {
  return (
    <Carousel className='h-100' >
      {Models.map((Model) => {
        return (
          <Carousel.Item interval={2500}  >
            <Model.Model />
          
            <Carousel.Caption>
              <div style={{display:'flex', justifyContent:'center',alignItems:'center', padding:15, background:'rgba(0, 0, 0, 0.62)', width:500, margin:'0 auto',flexWrap:'wrap'}}>
              <h3 style={{color:"white", margin:5, width:'100%'}}>{Model.title}</h3>
              <p style={{color:"white", width:'100%'}}>{Model.text}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}


    </Carousel>
  );
}

