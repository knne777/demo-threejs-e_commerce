import Carousel from 'react-bootstrap/Carousel';
import { Canvas } from '@react-three/fiber'
export function Sliders({ Models }) {
  return (
    <Carousel className='h-100' >
      {Models.map((Model) => {
        return (
          <Carousel.Item interval={2500}  >
            <div style={{ display: 'flex', flexWrap:'wrap', justifyContent:'center', minHeight:'100vh', alignItems:'center', width:'100%', minWidth:'100vw'}}>
              <Model.Model />
              <div style={{ display: 'flex', padding: 25, width: '50vw', flexWrap: 'wrap', height: 500,  padding: 20, minWidth:350 }}>
                <h2 style={{ fontSize: 50, color: "rgb(99, 99, 99)", margin: 5, width: '100%' }}>{Model.title}</h2>
                <h3 style={{ fontSize: 34, color: Model.color, margin: 5, width: '100%' }}>$600.00 MNX</h3>
                <div style={{ display: 'flex', width: '100%', margin: 10 }}>
                  <div style={{ padding: 20, background: Model.color, width: 65, textAlign: 'center', color: 'white', margin: 10 }}>
                    5
                  </div>
                  <div style={{ padding: 20, background: 'transparent', width: 65, textAlign: 'center', color: 'black', margin: 10, border: '1px solid black' }}>
                    6
                  </div>
                  <div style={{ padding: 20, background: 'transparent', width: 65, textAlign: 'center', color: 'gray', margin: 10, border: '1px solid gray' }}>
                    7
                  </div>
                  <div style={{ padding: 20, background: 'transparent', width: 65, textAlign: 'center', color: 'black', margin: 10, border: '1px solid black' }}>
                    8
                  </div>
                  <div style={{ padding: 20, background: 'transparent', width: 65, textAlign: 'center', color: 'black', margin: 10, border: '1px solid black' }}>
                    9
                  </div>
                </div>
                <p style={{ color: "rgb(99, 99, 99)", width: '600px', marginTop: 20 }}>{Model.text}</p>
              </div>

            </div>
            <Carousel.Caption>

            </Carousel.Caption>

          </Carousel.Item>
        )
      })}
    </Carousel>
  );
}

