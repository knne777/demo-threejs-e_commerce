import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import { Stats, OrbitControls } from '@react-three/drei'
export function Card({ Model }) {

    return (
        <div style={{ width: "100vw", height: "100vh", background: "balck" }} >
            <Canvas shadowMap  
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
                    reverseOrbit
                />
                <Suspense fallback={null}>
                    <Model />

                </Suspense>
            </Canvas>
        </div>

    )
}