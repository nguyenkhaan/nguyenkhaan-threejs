//html tag: Render the component on the top (surface) of the 3D objects. Using div cannot render the same
import { useProgress, Html } from '@react-three/drei';

export default function Loader() {
    const { progress } = useProgress();
    return (
        <Html className="canvas-loader">
            <p className="font-black text-base mt-40 text-[#f1f1f1]">
                {progress.toFixed(2)}
            </p>
        </Html>
    );
}
