import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import { Stats, OrbitControls } from '@react-three/drei'
export function Card({ Model, color }) {

    return (
        <div style={{ width: "50vw", background: "balck", position:'relative',justifyContent:'center', minHeight:'50vh', height:'50vh' }} >
            <div style={{width:'50px', height:'50px', background:color, borderRadius:'50%', position:'absolute', left:0, right:0,top:0, bottom:0, margin:'auto', transition:'0.5s', transform:'scale(10)'}}>
            </div>
            <Canvas shadowMap
                style={{ background: "rgba(0, 0, 0, 0)" }}
                colorManagement>
                <fog attach="fog" args={["white", 0, 40]} />
                <ambientLight intensity={0.1} />
                <directionalLight
                    intensity={0.5}
                    castShadow
                    shadow-mapSize-height={512}
                    shadow-mapSize-width={512}
                />
                <OrbitControls
                    autoRotate={true}

                />
                <Suspense fallback={null}>
                    <Model />

                </Suspense>
            </Canvas>
        </div>

    )
}