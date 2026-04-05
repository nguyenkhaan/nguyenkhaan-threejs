import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './shared/components/Navbar';
import Landing from './pages/Landing/page';
import { Toaster } from 'react-hot-toast';
import { motion, useMotionValue } from 'framer-motion';
import { useSpring } from 'framer-motion';
function App() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);
    useEffect(() => {
        const moveCursor = (e: any) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };
        window.addEventListener('mousemove', moveCursor);
        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);
    return (
        <BrowserRouter>
            <Navbar />
            <motion.div
                className="cursor"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                }}
            ></motion.div>
            <Toaster position="top-center" />
            <Landing />
        </BrowserRouter>
    );
}
export default App;
