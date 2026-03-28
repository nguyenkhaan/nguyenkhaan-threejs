/**
 * How to use them?
 * Preload:
 * OrbitControls:
 * useGLTF:
 */
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload, OrbitControls, useGLTF } from '@react-three/drei';
import Loader from '../components/Loader';
function Computer() {
    const computerModel = useGLTF('./office_computer/scene.gltf');
    return (
        <mesh>
            <hemisphereLight intensity={1.2} />
            <pointLight intensity={0.8} />
            <primitive scale={0.04} object={computerModel.scene}></primitive>
        </mesh>
    );
}
//1. Define the object models, fix the light (brightness, skylight, pointlight...)
//2. Import the model to the canvas
//3. Fix the camrera, orbitControls (angle to move, zoom... )
//4. Way to load: Preload & Suspense
export default function ComputerCanvas() {
    return (
        <Canvas camera={{ position: [20, 4, 20], fov: 25 }}>
            {/* Loading the component  */}
            <Suspense fallback={<Loader />}>
                {/* Allow to move the models left and right  */}
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computer />
            </Suspense>
            {/* Loading asset 3d Objects before your need. it make your webste become faster */}
            <Preload all />
        </Canvas>
    );
}
