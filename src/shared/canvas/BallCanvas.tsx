import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
    OrbitControls,
    useTexture,
    Decal,
    Float,
    Preload,
} from '@react-three/drei';
import Loader from '../components/Loader';

function Ball({ icon }: { icon: string }) {
    const decal = useTexture(icon);

    return (
        <Float speed={1.75} floatIntensity={2} rotationIntensity={1}>
            <ambientLight intensity={1} />
            <mesh castShadow receiveShadow scale={2.75}>
                {/* Duong kinh + do loi lom cua hinh  */}
                <icosahedronGeometry args={[1, 1]} />
                <hemisphereLight intensity={0.3} />
                <meshStandardMaterial color="#9ccfff" />
                <Decal
                    map={decal}
                    position={[0, 0, 1]}
                    // Force the decals to turn in the right direction  , z torawrds you, y up, x left right
                    rotation={[0, 0, 0]}
                    scale={1}
                />
            </mesh>
        </Float>
    );
}
function BallCanvas({ icon }: { icon: string }) {
    return (
        <Canvas>
            <Suspense fallback={<Loader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Ball icon={icon} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
}
export default BallCanvas;
