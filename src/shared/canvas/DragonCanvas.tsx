import Loader from '../components/Loader';
import {
    Preload,
    OrbitControls,
    useGLTF,
    useAnimations,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect } from 'react';

function DragonModel() {
    const { scene, animations } = useGLTF('dragon__thera/scene.gltf');
    const { actions, names } = useAnimations(animations, scene);
    useEffect(() => {
        console.log(actions, names);
        if (actions && names.length > 0) {
            actions[names[0]]?.play(); //Run the first animation
        }
    }, [actions]);

    return (
        <mesh>
            <hemisphereLight intensity={4} />
            <pointLight position={[20, 10, 10]} intensity={1} />
            <primitive
                scale={0.01}
                object={scene}
                position={[-4, -1, -1.5]}
            ></primitive>
        </mesh>
    );
}
function DragonCanvas() {
    return (
        <Canvas camera={{ position: [20, 5, 4], fov: 20 }}>
            <Suspense fallback={<Loader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <DragonModel />
            </Suspense>
            <Preload all />
        </Canvas>
    );
}
export default DragonCanvas;
