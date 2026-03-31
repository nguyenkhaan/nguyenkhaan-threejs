import Loader from '../components/Loader';
import {
    Preload,
    OrbitControls,
    useGLTF,
    useAnimations,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect } from 'react';

function BlackMagicianGirl() {
    const { scene, animations } = useGLTF('magician/scene.gltf');
    const { actions, names } = useAnimations(animations, scene);

    useEffect(() => {
        if (actions && names.length > 0) {
            actions[names[0]]?.play();
        }
    }, [actions, names]);

    return (
        <>
            <ambientLight intensity={1} />
            <hemisphereLight intensity={0.5} />
            <directionalLight position={[5, 10, 5]} intensity={1.5} />

            <primitive object={scene} scale={28} position={[0, -70, 0]} />
        </>
    );
}
function BlackMagicianGirlCanvas() {
    return (
        <Canvas
            className="h-screen"
            camera={{
                position: [140, 0, 130],
                fov: 40,
                near: 0.1,
                far: 600,
            }}
        >
            <Suspense fallback={<Loader />}>
                <OrbitControls
                    enablePan={false}
                    enableRotate={false}
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={-Math.PI / 2}
                />
                <BlackMagicianGirl />
            </Suspense>
            <Preload all />
        </Canvas>
    );
}
export default BlackMagicianGirlCanvas;
