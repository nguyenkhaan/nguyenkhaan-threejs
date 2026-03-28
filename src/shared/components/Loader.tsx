//html tag: Render the component on the top (surface) of the 3D objects. Using div cannot render the same
import { useProgress, Html } from '@react-three/drei';

export default function Loader() {
    const { progress } = useProgress();
    return (
        <Html className="canvas-load">
            <p className="font-black md:text-lg text-base xl:text-2xl mt-40 text-[#f1f1f1]">
                {progress.toFixed(2)}%
            </p>
        </Html>
    );
}
